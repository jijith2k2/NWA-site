document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const photoInput = document.getElementById('photo');
    const photoPreview = document.getElementById('photoPreview');
    
    // Photo preview
    photoInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const file = this.files[0];
            
            // Check file size (max 1MB)
            if (file.size > 1000000) {
                alert('Photo size should be less than 1MB');
                this.value = '';
                return;
            }
            
            const reader = new FileReader();
            reader.onload = function(e) {
                photoPreview.style.display = 'block';
                photoPreview.style.backgroundImage = `url(${e.target.result})`;
            }
            reader.readAsDataURL(file);
        }
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) return;
        
        // Process payment
        initiatePayment();
    });
    
    function validateForm() {
        const name = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const address = document.getElementById('address').value.trim();
        const photo = photoInput.files[0];
        
        if (!name || !email || !mobile || !address || !photo) {
            alert('Please fill all fields');
            return false;
        }
        
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            alert('Please enter a valid email');
            return false;
        }
        
        if (!/^[0-9]{10}$/.test(mobile)) {
            alert('Please enter a valid 10-digit mobile number');
            return false;
        }
        
        return true;
    }
    
    function initiatePayment() {
        const name = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const photo = photoInput.files[0];
        
        // Disable submit button
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').textContent = 'Processing...';
        
        // Convert photo to base64
        const reader = new FileReader();
        reader.onload = function(e) {
            const photoBase64 = e.target.result.split(',')[1];
            
            // Create payment options
            const options = {
                key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key
                amount: 9900, // ₹99 in paise
                currency: 'INR',
                name: 'Network Welfare Association',
                description: 'Membership Registration',
                image: 'images/nwa-logo.png',
                handler: function(response) {
                    // On successful payment
                    saveMemberData(response, name, email, mobile, photoBase64);
                },
                prefill: {
                    name: name,
                    email: email,
                    contact: mobile
                },
                notes: {
                    address: document.getElementById('address').value.trim()
                },
                theme: {
                    color: '#2c3e50'
                }
            };
            
            const rzp = new Razorpay(options);
            rzp.open();
        };
        reader.readAsDataURL(photo);
    }
    
    function saveMemberData(paymentResponse, name, email, mobile, photoBase64) {
        // Generate member ID (initials + random number)
        const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
        const memberId = `NWA-${initials}-${Math.floor(1000 + Math.random() * 9000)}`;
        
        // Prepare data for API
        const memberData = {
            name: name,
            email: email,
            mobile: mobile,
            address: document.getElementById('address').value.trim(),
            photo: photoBase64,
            payment_id: paymentResponse.razorpay_payment_id,
            member_id: memberId,
            amount: 99,
            timestamp: new Date().toISOString()
        };
        
        // Send to server
        fetch('api/save_member.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(memberData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirect to card page with member ID
                window.location.href = `card.html?member_id=${memberId}`;
            } else {
                alert('Error saving data: ' + data.message);
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').textContent = 'Register & Pay ₹99';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').textContent = 'Register & Pay ₹99';
        });
    }
});