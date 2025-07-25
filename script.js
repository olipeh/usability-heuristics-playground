// JavaScript for Usability Heuristics Playground

document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active-section');
                section.classList.add('hidden-section');
            });
            
            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden-section');
                targetSection.classList.add('active-section');
            }
        });
    });
    
    // Heuristic 1: Visibility of System Status
    const demoForm = document.getElementById('demoForm');
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // No loading indicator or success message
            // Just silently do nothing - bad UX for system status
            
            // After 3 seconds, clear the form to confuse the user
            setTimeout(() => {
                this.reset();
            }, 3000);
        });
    }
    
    // Heuristic 3: User Control and Freedom
    const showModalBtn = document.getElementById('showModalBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (showModalBtn && modalOverlay) {
        showModalBtn.addEventListener('click', function() {
            modalOverlay.classList.remove('hidden');
            // No way to close the modal - intentionally bad UX
        });
        
        // Adding a hidden way to close it after 30 seconds for testing purposes
        setTimeout(() => {
            if (!modalOverlay.classList.contains('hidden')) {
                modalOverlay.classList.add('hidden');
            }
        }, 30000);
    }
    
    // Heuristic 5: Error Prevention
    const deleteAccountBtn = document.getElementById('deleteAccountBtn');
    
    if (deleteAccountBtn) {
        deleteAccountBtn.addEventListener('click', function() {
            // No confirmation, just immediate action - bad UX for error prevention
            alert('Your account has been deleted!');
        });
    }
    
    // Heuristic 6: Recognition Rather than Recall
    const sectionCodeInput = document.getElementById('sectionCodeInput');
    const goToSectionBtn = document.getElementById('goToSectionBtn');
    
    if (sectionCodeInput && goToSectionBtn) {
        goToSectionBtn.addEventListener('click', function() {
            const code = sectionCodeInput.value.trim();
            let message = '';
            
            // Forces recall instead of recognition
            switch(code) {
                case 'H-1234':
                    message = 'Company History: Founded in 2010, our company has grown...';
                    break;
                case 'T-5678':
                    message = 'Team Members: Our team consists of 25 professionals...';
                    break;
                case 'M-9012':
                    message = 'Mission Statement: To provide the best user experiences...';
                    break;
                default:
                    message = 'Invalid code. Please try again.';
            }
            
            alert(message);
        });
    }
    
    // Heuristic 7: Flexibility and Efficiency of Use
    const galleryImages = document.querySelectorAll('.gallery img');
    const prevImageBtn = document.getElementById('prevImage');
    const nextImageBtn = document.getElementById('nextImage');
    let currentImageIndex = 0;
    
    if (galleryImages.length && prevImageBtn && nextImageBtn) {
        // Only button navigation, no keyboard shortcuts or gestures
        // Inefficient for power users
        
        prevImageBtn.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            scrollToImage(currentImageIndex);
        });
        
        nextImageBtn.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            scrollToImage(currentImageIndex);
        });
        
        function scrollToImage(index) {
            galleryImages[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
    }
    
    // Heuristic 9: Help Users Recognize, Diagnose, and Recover from Errors
    const productSearchForm = document.getElementById('productSearchForm');
    const searchError = document.getElementById('searchError');
    
    if (productSearchForm && searchError) {
        productSearchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = document.getElementById('productSearchInput');
            
            // Show unhelpful error message regardless of input
            searchError.classList.remove('hidden');
            
            // No guidance on how to fix the error
            // No explanation of what went wrong
        });
    }
    
    // Technical jargon buttons - Heuristic 2
    const techButton1 = document.getElementById('techButton1');
    const techButton2 = document.getElementById('techButton2');
    
    if (techButton1 && techButton2) {
        techButton1.addEventListener('click', function() {
            alert('Function executed: DOM traversal initialized with recursive node iteration.');
        });
        
        techButton2.addEventListener('click', function() {
            alert('Protocol implemented: TCP handshake completed with 3-way verification.');
        });
    }
    
    // Service order buttons - Heuristic 10
    const orderBtns = document.querySelectorAll('.order-btn');
    
    if (orderBtns.length) {
        orderBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // No help documentation or guidance
                alert('Order placed! Someone will contact you soon.');
            });
        });
    }
});