let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let saveButton = document.getElementById("saveButton")

function generatePassword(len){
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const simbol = "`~!@#$%^&*()_+[]{}\|;:',<.>/?";

    const data = lowerAlphabet + upperAlphabet +numeric +simbol;
    let generator = '';

    for(let i = 0; i < len; i++){
        generator += data[Math.floor(Math.random() * data.length)];
    }
    return generator
}

function getPassword(){
    const newPassword = generatePassword(passwordLength.value);
    if (passwordLength.value > 100) {
        setTimeout(() => {
            alert("Password melebihi 100 karakter!");
        }, 1000);
    }else{
        password.value = newPassword;
    }
}

function savePassword(){
    saveButton.addEventListener("click", function(){
        let textCopy = password.value;

        navigator.clipboard.writeText(textCopy)
        setTimeout(() => {
            alert("Teks berhasil disalin ke clipboard!");
        }, 1000);
    });
}
