const btn = document.getElementById("themeBtn");

btn.onclick = () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.textContent = "Светлая тема";
    } else {
        btn.textContent = "Темная тема";
    }
};
