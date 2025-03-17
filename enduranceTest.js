import { check, group, sleep } from 'k6';
import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

// Base URL
const BASE_URL = 'https://restful-booker.herokuapp.com';

// Load Test Options
export let options = {
    stages: [
        { duration: '5s', target: 500 },
        { duration: '1h', target: 500 },
        { duration: '5s', target: 0 },
    ]
};

// Global Variables
let token = '';
let bookingId = '';

export default function () {
    group('Auth', function () {
        let authPayload = JSON.stringify({
            username: 'admin',
            password: 'password123'
        });

        let authHeader = { 'Content-Type': 'application/json' };

        let authRes = http.post(`${BASE_URL}/auth`, authPayload, { headers: authHeader });

        check(authRes, {
            'Auth - status is 200': (r) => r.status === 200,
            'Auth - token received': (r) => r.json('token') !== undefined
        });

        if (authRes.status === 200) {
            token = authRes.json('token');
        }

        sleep(1);
    });

    group('Create Booking', function () {
        let createBookingPayload = JSON.stringify({
            firstname: 'Jim',
            lastname: 'Brown',
            totalprice: 111,
            depositpaid: true,
            bookingdates: { checkin: '2023-01-01', checkout: '2023-01-05' },
            additionalneeds: 'Breakfast'
        });

        let createBookingHeader = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        let createBookingRes = http.post(`${BASE_URL}/booking`, createBookingPayload, { headers: createBookingHeader });

        check(createBookingRes, { 'Create booking - status is 200': (r) => r.status === 200 });

        if (createBookingRes.status === 200) {
            bookingId = createBookingRes.json('bookingid');
        }

        sleep(1);
    });

    group('Get Booking', function () {
        let getBookingRes = http.get(`${BASE_URL}/booking`);
        check(getBookingRes, { 'Get Booking - status is 200': (r) => r.status === 200 });

        sleep(1);

        let getBookingHeader = { 'Accept': 'application/json' };

        let getBookingIdRes = http.get(`${BASE_URL}/booking/${bookingId}`, { headers: getBookingHeader });

        check(getBookingIdRes, { 'Get Booking Id - status is 200': (r) => r.status === 200 });

        sleep(1);

        // Get booking by parameter
        let firstname = 'Jim';
        let getBookingByParamRes = http.get(`${BASE_URL}/booking?firstname=${firstname}`);

        check(getBookingByParamRes, { 'Get Booking by param - status is 200': (r) => r.status === 200 });

        sleep(1);
    });

    group('Update Booking', function () {
        let updateBookingPayload = JSON.stringify({
            firstname: 'Syahda',
            lastname: 'Afia',
            totalprice: 123,
            depositpaid: false,
            bookingdates: { checkin: '2025-01-01', checkout: '2025-01-05' },
            additionalneeds: 'Blanket'
        });

        let updateBookingHeader = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${token}`
        };

        let updateBookingRes = http.put(`${BASE_URL}/booking/${bookingId}`, updateBookingPayload, { headers: updateBookingHeader });

        check(updateBookingRes, { 'Update booking - status is 200': (r) => r.status === 200 });

        sleep(1);

        let updateBookingPartialPayload = JSON.stringify({
            firstname: 'Zacky',
            lastname: 'Faishal'
        });

        let updateBookingPartialHeader = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${token}`
        };

        let updateBookingPartialRes = http.patch(`${BASE_URL}/booking/${bookingId}`, updateBookingPartialPayload, { headers: updateBookingPartialHeader });

        check(updateBookingPartialRes, { 'Update booking partial - status is 200': (r) => r.status === 200 });

        sleep(1);
    });

    group('Delete Booking', function () {
        let deleteBookingHeader = {
            'Content-Type': 'application/json',
            'Cookie': `token=${token}`
        };

        let deleteBookingRes = http.del(`${BASE_URL}/booking/${bookingId}`, null, { headers: deleteBookingHeader });

        check(deleteBookingRes, { 'Delete booking - status is 201': (r) => r.status === 201 });

        sleep(1);
    });
}

// Generate Test Report
export function handleSummary(data) {
    return {
        'reports/enduranceTest.html': htmlReport(data),
        stdout: textSummary(data, { indent: ' ', enableColors: true }),
    };
}
