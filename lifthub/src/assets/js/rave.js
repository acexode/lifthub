function payWithRave() {
    console.log('initialize payment')
    var x = getpaidSetup({
        PBFPubKey: 'FLWPUBK-73f9f2047d8df29124adc6d43aa6134a-X',
        // PBFPubKey: 'FLWPUBK-e2f49a592820916c1f1c939c171b645a-X',
        customer_email: "abudawud92@gmail.com",
        amount: 2000,
        customer_phone: "2347056855607",
        currency: "NGN",
        txref: "rave-123456",
        meta: [{
            metaname: "flightID",
            metavalue: "AP1234"
        }],
        onclose: function() {},
        callback: function(response) {
            var txref = response.tx.txRef; // collect txRef returned and pass to a 					server page to complete status check.
            console.log("This is the response returned after a charge", response);
            if (
                response.tx.chargeResponseCode == "00" ||
                response.tx.chargeResponseCode == "0"
            ) {
                // redirect to a success page
            } else {
                // redirect to a failure page.
            }

            x.close(); // use this to close the modal immediately after payment.
        }
    });
}