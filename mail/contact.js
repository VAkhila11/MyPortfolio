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
        
        // Submit to Formspree
        $.ajax({
            url: "https://formspree.io/f/xbjnkwbv",
            type: "POST",
            data: {
                name: name,
                email: email,
                subject: subject,
                message: message
            },
            dataType: "json",
            success: function(response) {
                showMessage("Thank you! Your message has been sent successfully.", "success");
                $('#contactForm')[0].reset();
            },
            error: function(xhr, status, error) {
                if (xhr.status === 0) {
                    showMessage("Thank you! Your message has been sent successfully.", "success");
                    $('#contactForm')[0].reset();
                } else {
                    showMessage("Sorry " + name + ", there was an error sending your message. Please try again later!", "danger");
                }
            },
            complete: function() {
                setTimeout(function() {
                    $this.prop("disabled", false);
                    $this.text("Send Message");
                }, 1000);
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
        $('#success').html("<div class='alert alert-" + type + "'>");
        $('#success > .alert-' + type).html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
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
