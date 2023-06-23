App: 애플리케이션의 최상위 컴포넌트로서, 라우팅을 설정하고 전역 스타일을 적용하는 역할을 합니다.

Header: 웹 페이지의 상단에 위치하는 헤더 컴포넌트로서, 로고나 메뉴 등을 포함하여 사용자에게 편리한 네비게이션을 제공하는 역할을 합니다. Form: 할 일을 입력하는 폼 컴포넌트로서, 사용자로부터 제목과 내용을 입력받아 Redux 액션을 발생시키고 상태를 업데이트하는 역할을 합니다.

DoingList: 진행 중인 할 일을 보여주는 리스트 컴포넌트로서, 스토어에서 상태를 가져와서 필터링하여 보여주는 역할을 합니다.

OkList: 완료된 할 일을 보여주는 리스트 컴포넌트로서, 스토어에서 상태를 가져와서 필터링하여 보여주는 역할을 합니다.

filter: 할 일 데이터를 매핑하여 화면에 출력하는 컴포넌트로서, 리스트 컴포넌트에 데이터를 전달하여 필터링된 할 일을 렌더링하는 역할을 합니다.

DetailPage: 할 일의 상세 정보를 보여주는 페이지 컴포넌트로서, URL 파라미터를 사용하여 해당 할 일의 정보를 가져와 화면에 표시하는 역할을 합니다.

GlobalStyle: 전역적으로 적용되는 CSS 스타일을 정의하는 컴포넌트로서, 애플리케이션 전체에 적용되는 스타일을 설정하는 역할을 합니다.

각 컴포넌트는 애플리케이션의 특정 부분을 담당하며, 서로 협력하여 사용자에게 일정 관리 기능을 제공합니다.
