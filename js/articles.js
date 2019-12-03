const getBlogs = () => {

    const blogs = fetch('http://virginiadooley.info/')
        .then(function (response) {
            // When the page is loaded convert it to text
            return response.text()
        })
        .then(function (html) {
            // Initialize the DOM parser
            let parser = new DOMParser();
            // Parse the text
            let doc = parser.parseFromString(html, "text/html");
            // You can now even select part of that html as you would in the regular DOM
            // Example:
            let blogArticles = {};
            let blogTitle = doc.querySelector('.post-title').innerText;
            let blogLink = doc.querySelector('.post-preview a').innerText;
            let blogText = doc.querySelector('.post-preview p').innerText;
            let blogMeta = doc.querySelector('.post-meta').innerText;

            blogArticles.blogTitle = blogTitle;
            blogArticles.blogLink = blogLink;
            blogArticles.blogText = blogText;
            blogArticles.blogMeta = blogMeta;

            const title = document.querySelector('#blog-title > h3');
            title.textContent = blogTitle;

            const text = document.querySelector('#blog-text > p');
            text.textContent = blogText;

            // const link = document.querySelector('#blog-link > a');
            // link.textContent = blogLink;

            const meta = document.querySelector('#blog-meta > p');
            meta.textContent = blogMeta;

        })
        .catch(function (err) {
            console.log('Failed to fetch page: ', err);
        });
};

getBlogs();
