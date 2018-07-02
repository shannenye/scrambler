const scrambler = {
    scramble: (message) => {
        $('#scrambler').empty();

        message = message.split('');
        let uniqueString = '0123456789Evy}JTj@Nt:xU&amp;YKHcFZOXlns%oCi#W$r)p*^MfqbReDg{kwA!QPLBhazmduI(?VG S.';
		let insertHidden = [];
        let result = `<span hidden>${message.shift()}</span>`;

        while (message.length) {
            let chance = Math.floor(Math.random() * 100);
            let insertHiddenThisManyTimes = chance % 25 !== 0 ? Math.ceil(chance / 25) : 0;

            for (let i = 0; i <= insertHiddenThisManyTimes; i++) {
                insertHidden.push(Math.floor(Math.random() * 100));
            }
            insertHidden = insertHidden.sort();

            for (let i = 0; i < 100; i++) {
                let range = Math.floor(Math.random() * 82);
                let randomChar = uniqueString[range];

                if (i === insertHidden[0]) {
                    result += `<span hidden>${message[0]}</span>`;
                    if (message.length === 0 || insertHidden.length === 0) {
                        break;
                    } else {
                        message.shift();
                        insertHidden.shift();
                    }
                }
                result += `<span>${randomChar}</span>`;
            }
            result += '<br>';
        }
        $('#scrambler').html(result);
    },
    unscramble: () => {
        const spans = document.querySelectorAll('span');
        let message = '';

        spans.forEach(span => {
            if (span.hidden) {
                message += span.innerHTML;
            }
        });
        document.write(message);
    }
};
