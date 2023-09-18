document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("calcForm");
  const result = document.getElementById("result");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
      result.textContent = "有効な数値を入力してください。";
      return;
    }

    if (num2 === 0) {
      result.textContent = "数値2は0以外の値である必要があります。";
      return;
    }

    if (num1 < num2) {
      let ratio = num1 / num2;
      result.textContent = `比率: ${ratio.toFixed(2)}`;
    } else {
      let ratio = num2 / num1;
      result.textContent = `比率: ${ratio.toFixed(2)}`;
    }

  });
});
