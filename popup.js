// 클릭 횟수를 저장할 변수
let clickCount = 0;

// DOM이 로드되면 실행
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('clickMe');
  const counter = document.getElementById('counter');
  
  // 버튼 클릭 이벤트
  button.addEventListener('click', function() {
    clickCount++;
    counter.textContent = `클릭 횟수: ${clickCount}`;
    
    // 버튼 애니메이션 효과
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 100);
    
    // 클릭 횟수에 따른 메시지 변경
    if (clickCount === 5) {
      alert('축하합니다! 5번 클릭하셨네요! 🎉');
    } else if (clickCount === 10) {
      alert('와! 10번 클릭하셨습니다! 정말 대단해요! 🌟');
    }
  });
  
  // 현재 시간 표시
  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ko-KR');
    document.title = `현재 시간: ${timeString}`;
  }
  
  // 1초마다 시간 업데이트
  updateTime();
  setInterval(updateTime, 1000);
}); 