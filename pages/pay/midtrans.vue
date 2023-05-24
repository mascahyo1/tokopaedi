<template>
    <div>
      <button @click="createTransactionToken">Pay!</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      async createTransactionToken() {
        try {
            const serverKey = 'SB-Mid-server-tUyWZTicrKOaSbSI0cayn-zw'; // Ganti dengan server key Midtrans Anda
            const url = 'https://api.sandbox.midtrans.com/v1/payment-links';

            const requestBody = {
            transaction_details: {
                order_id: Math.floor(Math.random() * 1000000000), // ID pesanan Anda
                gross_amount: 200000, // Jumlah pembayaran
            },
            credit_card: {
                secure: true,
            },
            };

            const response = await fetch(url, {
                method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Basic ' + btoa(serverKey + ';'),
            },
            body: JSON.stringify(requestBody),
            });
        } catch (error) {
            console.error('Error creating transaction token:', error);
        }




      },
    },
  };
  </script>
  