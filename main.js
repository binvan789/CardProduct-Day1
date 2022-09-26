const heartElement = document.querySelector('.card__heart');
const app = {
    isActive: false,
    activeBtn: function() {
        heartElement.onclick = function() {
            if (this.isActive) {
                heartElement.classList.remove('active');
                this.isActive = false;
            } else {
                heartElement.classList.add('active');
                this.isActive = true;
            }
        }
    }
}

app.activeBtn();