document.addEventListener('load', function(){

    const postsPerPage = 20; // Number of posts to display per page
    let currentPage = 1; // Current page

    async function fetchData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            const totalPosts = data.length;

            const startIndex = (currentPage - 1) * postsPerPage;
            const endIndex = startIndex + postsPerPage;

            const dataList = document.getElementById("dataList");
            dataList.innerHTML = ""; // Clear the existing list

            for (let i = startIndex; i < endIndex; i++) {
                if (i >= totalPosts) {
                    break;
                }

                const item = data[i];

                const li = document.createElement("li");
                li.classList.add('list-group-item');
                li.innerHTML = `<h3>${item.title}</h3>
                  <p>${item.body}</p>`;
                dataList.appendChild(li);
            }

            // Create pagination links
            const totalPages = Math.ceil(totalPosts / postsPerPage);

            const paginationContainer = document.createElement("div");
            paginationContainer.classList.add("pagination");

            for (let page = 1; page <= totalPages; page++) {
                const link = document.createElement("a");
                link.href = "#";
                link.textContent = page;

                if (page === currentPage) {
                    link.classList.add("active");
                }

                link.addEventListener("click", () => {
                    currentPage = page;
                    dataList.innerHTML = ""; // Clear the existing list
                    fetchData();
                });

                paginationContainer.appendChild(link);
            }

            dataList.after(paginationContainer);
        } catch (error) {
            console.log("Error:", error);
        }
    }

    fetchData(); // Call the function to display the initial set of posts

})






