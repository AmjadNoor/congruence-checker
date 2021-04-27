 function triangle() {
     let select_1 = document.querySelector('.select_1').selectedIndex;
     let input_1 = document.querySelector('.input_1').value;

     let select_2 = document.querySelector('.select_2').selectedIndex;
     let input_2 = document.querySelector('.input_2').value;

     let select_3 = document.querySelector('.select_3').selectedIndex;
     let input_3 = document.querySelector('.input_3').value;

     let select_4 = document.querySelector('.select_4').selectedIndex;
     let input_4 = document.querySelector('.input_4').value;

     let select_5 = document.querySelector('.select_5').selectedIndex;
     let input_5 = document.querySelector('.input_5').value;

     let select_6 = document.querySelector('.select_6').selectedIndex;
     let input_6 = document.querySelector('.input_6').value;

     function blankChecker() {
         let input = input_1 == '' && input_2 == '' && input_3 == '' && input_4 == '' && input_5 == '' && input_6 == '';

         if (input) {
             alert('Please fill the criteria.');
         } else {
             return type_1();
         };
     };
     return blankChecker();

     function type_1() {
         let exp_1 = input_1 === input_4 && input_2 === input_5 && input_3 === input_6 && select_1 == [0] && select_4 == [0] && select_2 == [0] && select_5 == [0] && select_3 == [0] && select_6 == [0];
         let exp_2 = input_1 === input_4 && input_2 === input_5 && input_3 === input_6 && select_1 == [0] && select_4 == [0] && select_2 == [1] && select_5 == [1] && select_3 == [0] && select_6 == [0];
         let exp_3 = input_1 === input_4 && input_2 === input_5 && input_3 === input_6 && select_1 == [1] && select_4 == [1] && select_2 == [1] && select_5 == [1] && select_3 == [0] && select_6 == [0];
         let exp_4 = input_1 === input_4 && input_2 === input_5 && input_3 === input_6 && select_1 == [1] && select_4 == [1] && select_2 == [0] && select_5 == [0] && select_3 == [1] && select_6 == [1];

         if (exp_1) {
             document.querySelector('.para').innerHTML = `This triangle is congruence by the rule of SSS(Side Side Side).`;
         } else if (exp_2) {
             document.querySelector('.para').innerHTML = `This triangle is congruence by the rule of SAS(Side Angle Side).`;
         } else if (exp_3) {
             document.querySelector('.para').innerHTML = `This triangle is congruence by the rule of AAS(Angle Angle Side).`;
         } else if (exp_4) {
             document.querySelector('.para').innerHTML = `This triangle is congruence by the rule of ASA(Angle Side Angle).`;
         } else {
             document.querySelector('.para').innerHTML = `This is not a congruence triangle..`;
         };
     };
 };

 function submitForm() {
     let submitBtn = document.querySelector(".submit");
     submitBtn.addEventListener("click", () => {
         triangle();
     });
 };
 submitForm();