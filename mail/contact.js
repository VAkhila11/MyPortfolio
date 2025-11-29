$(function () {
    // Handle form submission
    $("#contactForm").on("submit", function(event) {
        event.preventDefault();
        
        var name = $("input#name").val();
        var email = $("input#email").val();
        var subject = $("input#subject").val();
        var message = $("textarea#message").val();
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showMessage("Please fill in all fields.", "danger");
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage("Please enter a valid email address.", "danger");
            return;
        }
        
        var $this = $("#sendMessageButton");
        $this.prop("disabled", true);
        $this.text("Sending...");
        
        // Submit directly to Formspree (works on static hosting like GitHub Pages)
        $.ajax({
            url: "https://formspree.io/f/xbjnkwbv",
            type: "POST",
            data: {
                name: name,
                email: email,
                subject: subject,
                message: message,
                _replyto: email,
                _subject: "Portfolio Contact: " + subject
            },
            dataType: "json",
            headers: {
                'Accept': 'application/json'
            },
            success: function(response) {
                showMessage("Thank you " + name + "! Your message has been sent successfully to vadlaakhila122@gmail.com. I'll get back to you soon!", "success");
                $('#contactForm')[0].reset();
                $this.prop("disabled", false);
                $this.text("Send Message");
            },
            error: function(xhr, status, error) {
                // If Formspree fails, show helpful error with direct email option
                var errorMsg = "Sorry " + name + ", there was an error sending your message. ";
                errorMsg += "Please email me directly at <a href='mailto:vadlaakhila122@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message) + "'>vadlaakhila122@gmail.com</a>";
                showMessage(errorMsg, "danger");
                $this.prop("disabled", false);
                $this.text("Send Message");
            }
        });
    });
    
    // Email validation function
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show message function
    function showMessage(message, type) {
        $('#success').html("<div class='alert alert-" + type + " alert-dismissible fade show'>");
        $('#success > .alert-' + type).html("<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>");
        $('#success > .alert-' + type).append("<strong>" + message + "</strong>");
        $('#success > .alert-' + type).append('</div>');
        
        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(function() {
                $('#success').fadeOut();
            }, 5000);
        }
    }
    
    // Clear messages when user starts typing
    $('#name, #email, #subject, #message').focus(function() {
        $('#success').html('');
    });
});
