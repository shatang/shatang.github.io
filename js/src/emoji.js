
    onload = function() {
        var click_cnt = 0;
        var $html = document.getElementsByTagName("html")[0];
        var $body = document.getElementsByTagName("body")[0];
        $html.onclick = function(e) {
            var $elem = document.createElement("b");
            $elem.style.color =  "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";/*点击效果颜色*/
            $elem.style.zIndex = 9999;
            $elem.style.position = "absolute";
            $elem.style.select = "none";
            var x = e.pageX;
            var y = e.pageY;
            $elem.style.left = (x - 10) + "px";
            $elem.style.top = (y - 20) + "px";
            clearInterval(anim);
            switch (++click_cnt) {
                case 1:
                    $elem.innerText = "<(￣3￣)> 表！";
                    break;
                case 2:
                    $elem.innerText = "ʅ（´◔౪◔）ʃ";
                    break;
                case 3:
                    $elem.innerText = "(๑•́ ₃ •̀๑)";
                    break;
                case 4:
                    $elem.innerText = "(๑•̀_•́๑)";
                    break;
                case 5:
                    $elem.innerText = "（￣へ￣）";
                    break;
                case 6:
                    $elem.innerText = "(╯°口°)╯(┴—┴";
                    break;
                case 7:
                    $elem.innerText = "Ψ(￣∀￣)Ψ";
                    break;
                case 8:
                    $elem.innerText = "╮(｡>口<｡)╭";
                    break;
                case 9:
                    $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
                    break;
                case 10:
                    $elem.innerText = "(ノへ￣、)";
                    break;
                case 11:
                    $elem.innerText = "o(￣ε￣*)";
                    break;
                case 12:
					$elem.innerText = "(ꐦ°᷄д°᷅)";
					break;
				case 13:
					$elem.innerText = "٩(●´৺`●)وbiu";
					break;
                case 14:
					$elem.innerText = "(ꐦ°᷄д°᷅)";
					break;
				 
//				case 15:  /*此处可以按照上面的格式添加表情*/
//					  break;
					 
                default:
					$elem.innerText = "(*/ω＼*)";
                    click_cnt=0;
                    break;
            }
            $elem.style.fontSize = "bold";
            var increase = 0;
            var anim;
            setTimeout(function() {
                anim = setInterval(function() {
                    if (++increase == 150) {
                        clearInterval(anim);
                        $body.removeChild($elem);
                    }
                    $elem.style.top = y - 20 - increase + "px";
                    $elem.style.opacity = (150 - increase) / 120;
                }, 8);
            }, 70);
            $body.appendChild($elem);
        };
    };

