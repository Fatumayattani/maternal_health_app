document.addEventListener("DOMContentLoaded", function () {
    const campaignForm = document.getElementById("campaign-form");
    
    campaignForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const campaignTitle = document.getElementById("campaign-title").value;
        const campaignDescription = document.getElementById("campaign-description").value;
        const campaignGoal = parseFloat(document.getElementById("campaign-goal").value);
        
        if (campaignTitle && campaignDescription && campaignGoal > 0) {
            // Call function to initiate payment using Africa's Talking APIs
            initiatePayment(campaignTitle, campaignDescription, campaignGoal);
        } else {
            alert("Please fill in all fields and provide a valid fundraising goal.");
        }
    });
    
    function initiatePayment(title, description, goal) {
        // Call Africa's Talking API to initiate payment
        // Example API call using fetch or XMLHttpRequest
        // Replace with actual API endpoint and data
        const apiUrl = "https://api.example.com/initiate-payment";
        const requestData = {
            title: title,
            description: description,
            goal: goal,
        };
        
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the API response and redirect to payment page
            if (data.success) {
                window.location.href = data.paymentUrl;
            } else {
                alert("Payment initiation failed. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        });
    }
});