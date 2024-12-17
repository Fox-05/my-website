const messages = [
  "Nhớ nhớ nhớ em!",
];

function generateRandomNotifications() {
  const notificationCount = 50;

  for (let i = 0; i < notificationCount; i++) {
    setTimeout(() => {
      const notification = document.createElement('div');
      notification.className = 'notification';

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      notification.innerHTML = `
        <div class="notification-header">
          <button class="minimize-btn" onclick="minimizeNotification(this)">–</button>
          <span>Thông báo</span>
        </div>
        <p>${randomMessage}</p>
      `;

      const x = Math.random() * (window.innerWidth - 240);
      const y = Math.random() * (window.innerHeight - 160);
      notification.style.left = `${x}px`;
      notification.style.top = `${y}px`;

      document.body.appendChild(notification);
    }, i * 200);
  }
}

function minimizeNotification(button) {
  const notification = button.closest('.notification');
  notification.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
  var encodedText = '&#72;&#117;&#121;&#110;&#104;&#32;&#78;&#103;&#7885;&#99;&#32;&#76;&#97;&#109;&#32;&#65;&#110;&#104;'; // "Huỳnh Ngọc Lam Anh" được mã hóa
  var footer = document.createElement("a");
  footer.innerHTML = encodedText;
  footer.href = "https://www.facebook.com/HNLA2005"; // Link tới Facebook
  footer.target = "_blank"; // Mở link trong tab mới
  footer.style.display = "block";
  footer.style.marginTop = "20px";
  footer.style.textDecoration = "none";
  footer.style.color = "#427AA1"; /* Màu xanh nhẹ */
  footer.style.fontSize = "16px";
  footer.style.fontWeight = "bold";
  document.body.appendChild(footer);
});
