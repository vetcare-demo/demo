const RoleModule = {
  init() {
    this.setup();
  },

  setup() {
    const rolePemilik = document.getElementById("role-pemilik");
    const roleVet = document.getElementById("role-vet");
    const spesialisasiContainer = document.getElementById(
      "spesialisasi-container",
    );
    const spesialisasiInput = document.getElementById("spesialisasi");

    if (
      !rolePemilik ||
      !roleVet ||
      !spesialisasiContainer ||
      !spesialisasiInput
    ) {
      console.warn("RoleModule: Required elements not found");
      return;
    }

    const toggleSpesialisasi = () => {
      if (roleVet.checked) {
        spesialisasiContainer.style.display = "block";
        spesialisasiInput.setAttribute("required", "required");
      } else {
        spesialisasiContainer.style.display = "none";
        spesialisasiInput.removeAttribute("required");
        spesialisasiInput.value = "";
      }
    };

    rolePemilik.addEventListener("change", toggleSpesialisasi);
    roleVet.addEventListener("change", toggleSpesialisasi);

    toggleSpesialisasi();
  },
};

document.addEventListener("DOMContentLoaded", () => {
  RoleModule.init();
});
