const blogPosts = () => fetch('http://virginiadooley.info/')
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {
        // Initialize the DOM parser
        let parser = new DOMParser();
        // Parse the text
        let doc = parser.parseFromString(html, "text/html");
        // You can now even select part of that html as you would in the regular DOM
        // Example:
        let blogLink = doc.querySelector('.post-preview a').innerText;
        let blogTitle = doc.querySelector('.post-title').innerText;
        let blogText = doc.querySelector('.post-preview p').innerText;
    })
    .catch(function(err) {
        console.log('Failed to fetch page: ', err);
    });

// document.write('<h2>' + title + '</h2>')