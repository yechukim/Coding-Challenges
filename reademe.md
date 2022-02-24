## 솔루션 

- `header` 생성 후 `span` 3개 만듦 (클릭시 애니메이션 적용) => 스타일을 block으로 줌 
- Element.classList.toggle('open') 함수로 클래스 toggle => open 스타일 추가
- `span:nth-child()`로 햄버거 메뉴 스타일 하나씩 설정
-  햄버거 사이즈를 조정하지 않고 `translate`으로 위치를 조정함 

## style

> header
  - flex를 이용한 정렬
  - justify-content:space-between 를 사용해서 왼쪽/오른쪽 멀리 배치

> burger(버튼)
  - display:relative

> burger span
  - display:block

솔루션에서는 side menu 부분의 포지션을 absolute로 주고, 클릭할때 left를 0로 주어서 움직이도록 설정\
아렇게 하면 애초에 side menu가 왼쪽에 있기 때문에 child element로 있는 애들 신경 안써도 됨\
나는 `overflow-x` 로 가려줬었음

> nav
```css
nav{
  position:absoulte;
  width:200px;
  left:200px;
}
