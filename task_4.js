"use strict";

const gridContainer = document.createElement("ul");
gridContainer.classList.add("list");

for (let i = 1; i <= 6; i++) {
	gridContainer.insertAdjacentHTML("beforeend", `<li class="item item_${i}">0</li>`);
}

document.body.insertAdjacentElement("afterbegin", gridContainer);

gridContainer.addEventListener("click", (e) => {
	if (e.target.matches(".item")) {
		const currentValue = Number(e.target.textContent);

		e.target.textContent = currentValue + 1;
	}
});
