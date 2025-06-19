import { useEffect, useState } from "react";

const quotes=[
  "삶이 있는 한 희망은 있다 -키케로",
  "산다는 것 그것은 치열한 전투이다. -로망로랑",
  "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. -사무엘존슨",
  "언제나 현재에 집중할수 있다면 행복할것이다. -파울로 코엘료",
  "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해 -찰리 채플린",
  "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다 -엘버트 허버드",
  "신은 용기있는 자를 결코 버리지 않는다 -켄러",
  "한번의 실패와 영원한 실패를 혼동하지 마라 -F.스콧 핏제랄드",
  "피할수 없으면 즐겨라 –로버트 엘리엇",
  "계단을 밟아야 계단 위에 올라설수 있다, -터키속담"
  ];

  
  const Quote = () => {
    const [quote,setQuote] = useState('');
    useEffect(()=>{
      const random = Math.floor(Math.random()*quotes.length)
      setQuote(quotes[random]);
    },[]);
    //랜덤하게 명언 추출
    // Math.random(); //0~1 까지만 출력 가능 : 0~quotes.length 까지 필요
    return (
      <div className="quote">
        <p>오늘의 명언</p>
        <p>"{quote}"</p>
      </div>
    );
  };
  
  export default Quote;