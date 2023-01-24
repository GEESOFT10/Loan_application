{
  /* <div class="card">
  <span>
    <i class="fas fa-business-time fa-2x"></i>
  </span>
  <span>Personal loan</span>
</div>; */
}
const loadLoanType = () => {
  console.log("loanType :>> ", loanTypes);
  const loansElement = document.querySelector("#loans");
  loanTypes.length > 0
    ? loanTypes.map(({ icon, desc }, idx) => {
        const card = document.createElement("div");
        const iconWrap = document.createElement("span");
        const desc_ = document.createElement("span");
        const icon_ = document.createElement("i");

        icon_.setAttribute("class", `${icon}`);
        card.setAttribute("class", "card");
        desc_.textContent = desc;
        iconWrap.appendChild(icon_);
        card.appendChild(iconWrap);
        card.appendChild(desc_);
        loansElement.appendChild(card);

        card.addEventListener("click", () => {
          console.log("clicked");
          return (window.location.href = "/Loan_application/loanRequest.html");
        });
      })
    : null;
};

document.addEventListener("DOMContentLoaded", loadLoanType);
