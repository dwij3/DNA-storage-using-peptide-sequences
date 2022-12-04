let s = "", bin = "", final = "";

function binary_string_to_number(s) {

    let num = 0, i;

    for (i = 0; i < s.length; i++) {
        num = num * 2 + (s[i] - '0');
    }

    return num;

}


//string to binary converter
function string_to_binary(s) {
    let binary = "";

    for (let i = 0; i < s.length; i++) {
        let x = s.charCodeAt(i);
        let y = x.toString(2);
        console.log(x);
        let rem = 8 - y.length;
        let temp = "";
        while (rem--) {
            temp += '0';
        }

        temp += y;
        console.log(temp);
        binary += temp;
    }

    console.log(binary);
    return binary;

}

function encoder(s) {

    let i, num;

    let encoded = "";

    for (i = 2; i < s.length; i += 3) {
        num = binary_string_to_number(s.substr(i - 2, 3));

        switch (num) {

            case 0:
                encoded += 'S';
                break;

            case 1:
                encoded += 'T';
                break;

            case 2:
                encoded += 'E';
                break;

            case 3:
                encoded += 'Y';
                break;

            case 4:
                encoded += 'A';
                break;

            case 5:
                encoded += 'V';
                break;

            case 6:
                encoded += 'L';
                break;

            case 7:
                encoded += 'F';
                break;

        }

    }

    return encoded;

}

function encoder_2(s) {

    let i, num;

    let encoded = "";

    for (i = 2; i < s.length; i += 3) {
        num = binary_string_to_number(s.substr(i - 2, 3));

        switch (num) {

            case 0:
                encoded += 'Y';
                break;

            case 1:
                encoded += 'T';
                break;

            case 2:
                encoded += 'E';
                break;

            case 3:
                encoded += 'V';
                break;

            case 4:
                encoded += 'A';
                break;

            case 5:
                encoded += 'S';
                break;

            case 6:
                encoded += 'L';
                break;

            case 7:
                encoded += 'F';
                break;

        }

    }

    return encoded;

}

function decoder(s) {
    let binary = "";

    const mp = new Map([
        ["S", "000"],
        ["T", "001"],
        ["E", "010"],
        ["Y", "011"],
        ["A", "100"],
        ["V", "101"],
        ["L", "110"],
        ["F", "111"]
    ]);


    for (let i = 0; i < s.length; i++) {
        //string temp = mp[s[i]];
        binary += mp.get(s[i]);
    }
    return binary;
}

function decoder_2(s) {
    let binary = "";

    const mp = new Map([
        ["Y", "000"],
        ["T", "001"],
        ["E", "010"],
        ["V", "011"],
        ["A", "100"],
        ["S", "101"],
        ["L", "110"],
        ["F", "111"]
    ]);


    for (let i = 0; i < s.length; i++) {
        //string temp = mp[s[i]];
        binary += mp.get(s[i]);
    }
    return binary;
}

function recoverDecodedString(s) {
    let final = "";
    let n = s.length;

    for (let i = 0; i < n; i += 8) {

        if (i + 8 > n) {
            break;
        }
        let temp = "";

        for (let j = i; j < i + 8; j++) {
            temp += s[j];
        }

        let num = binary_string_to_number(temp);

        final += String.fromCharCode(num);
    }
    return final;
}


function myFunction() {
    s = document.getElementById("data").value;
    document.getElementById("input").textContent = s;
    event.preventDefault();

    //logic

    let binary = string_to_binary(s);
    document.getElementById("op1").textContent = binary;

    if ((binary.length) % 3 == 2) {
        binary += '0';
    }
    else if ((binary.length) % 3 == 1) {
        binary += '0';
        binary += '0';
    }


    let encoded = encoder(binary);
    document.getElementById("fin").textContent = encoded;

    if (encoded.length > 0) {
        //decode 
        bin = decoder(encoded);
        //document.getElementById("decode-bin").textContent = bin;
        final = recoverDecodedString(bin);
        console.log(final);

        //document.getElementById("HI").textContent = final;
    }

}


function myFunction2() {
    s = document.getElementById("data").value;
    document.getElementById("input").textContent = s;
    event.preventDefault();

    //logic

    let binary = string_to_binary(s);
    document.getElementById("op1").textContent = binary;

    if ((binary.length) % 3 == 2) {
        binary += '0';
    }
    else if ((binary.length) % 3 == 1) {
        binary += '0';
        binary += '0';
    }


    let encoded = encoder_2(binary);
    document.getElementById("fin").textContent = encoded;

    if (encoded.length > 0) {
        //decode 
        bin = decoder_2(encoded);
        //document.getElementById("decode-bin").textContent = bin;
        final = recoverDecodedString(bin);
        console.log(final);

        //document.getElementById("HI").textContent = final;
    }

}

function display() {
    document.getElementById("decode-bin").textContent = bin;
    document.getElementById("HI").textContent = final;
}



