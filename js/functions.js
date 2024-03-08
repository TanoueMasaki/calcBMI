function calcBMI(){
  // 体形イメージを配列に格納
  const bodyImages = ["./image/body_man_soushin.png"
                  ,"./image/body_man_normal.png"
                  ,"./image/body_man_himan.png"]

  // 身長と体重を取得
  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;
  let heightM = (height*0.01)*(height*0.01);

  // BMIを計算
  let BMI = Math.round((weight / heightM)*10) / 10;

  // 標準体重を計算
  let standardWeight = Math.round((heightM*22)*10) / 10;

  // BMIから肥満度分類を決定
  let bodyClassification;
  let bodyClassificationNum;
  let imagesNum;
  if(BMI < 18.5){
    bodyClassification = "低体重";
    bodyClassificationNum = 1;
    imagesNum = 0;
  }else if(BMI >= 18.5 && BMI < 25){
    bodyClassification = "普通体重";
    bodyClassificationNum = 2;
    imagesNum = 1;
  }else if(BMI >= 25 && BMI < 30){
    bodyClassification = "肥満（1度）";
    bodyClassificationNum = 3;
    imagesNum = 2;
  }else if(BMI >= 30 && BMI < 35){
    bodyClassification = "肥満（2度）";
    bodyClassificationNum = 4;
    imagesNum = 2;
  }else if(BMI >= 35 && BMI < 40){
    bodyClassification = "肥満（3度）";
    bodyClassificationNum = 5;
    imagesNum = 2;
  }else if(BMI >= 40){
    bodyClassification = "肥満（4度）";
    bodyClassificationNum = 6;
    imagesNum = 2;
  }


  // 未入力があればエラー表示
  if(height === "" || weight === ""){
      document.getElementById('showResult').textContent = "未入力のデータがあります";
      document.getElementById('showResult').style.color = "red";
  }else{
      document.getElementById('showResult').textContent = `BMIは「${BMI}」です`;
      document.getElementById('standardWeight').textContent = `標準体重は「${standardWeight}kg」です`;
      document.getElementById('imageMessage').textContent = `あなたの肥満度分類は「${bodyClassification}」です`;
      document.getElementById('body').setAttribute("src",bodyImages[imagesNum]);
      document.getElementById('body').style.width = '20%'
      document.getElementById('body').style.display = 'block'
  }

  if(bodyClassificationNum === 4){
    document.getElementById('body').style.width = '25%'
  }else if(bodyClassificationNum === 5){
    document.getElementById('body').style.width = '30%'
  }else if(bodyClassificationNum === 6){
    document.getElementById('body').style.width = '35%'
  }
}
