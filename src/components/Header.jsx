import React, { useState } from 'react'
const headerNav = [
    // headerNav 라는 배열 안에 아래를 하나하나 넣어준 것
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title: "site",
        url: "#site"
    },
    {
        title: "portfolio",
        url: "#port"
    },
    {
        title: "contact",
        url: "#contact"
    },
]


const Header = () => {

    const [show, setShow] = useState(false);
    const toggleMenu = () => {
        setShow((prewShow) => !prewShow);
        //토글키를 사용할 수 있는 함수... 0이 들어오면 1로, 1이 들어오면 0으로 만들어주는 식의. 
    }

    return (
        <header id='header' role='banner'>
            <div className="header_inner">
                <div className="header_logo">
                    <a href="/">portfolio <em>react</em></a>
                </div>
                <div className={`header_nav ${show ? "show" : ""}`}
                    role='navigation'
                    aria-label='메인 메뉴'
                >
                    <ul>
                        {headerNav.map((nav, key) => (
                            // map을 이용해 headerNav를 nav로 가져오고 key는 인덱스 번호에 대입함.
                            // li의 갯수만큼 돌릴거니까 아래처럼 <li key={key}>로 적어준다.
                            //<a href=#title>title</a> 을 가져와야 하므로 중괄호{} 안에 nav.url과 nav.title로 적어줌
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}

                    </ul>
                </div>
                <div
                    className="header_nav_moblie"
                    id='headerToggle'
                    aria-expanded="false"
                    aria-controls='primary-menu'
                    role='button'
                    tabIndex="0"
                    onClick={toggleMenu}

                // tabindex="1"
                //     문서 안에서 가장 먼저 초점을 받을 수 있습니다. 그러나 자연스러운 마크업 순서를 거스르기 때문에 주의해서 사용해야 합니다. 검색엔진 사이트에서 검색창에 사용하면 적합하지만(이 대신 autofocus 속성이 더 적절할 듯 해요) 그 외 적합한 경우는 잘 떠오르지 않는군요.

                //     tabindex="0"
                //     키보드 초점을 받을 수 없는 div, span과 같은 요소도 초점을 받을 수 있도록 만들어 줍니다. 초점을 받되 초점을 받는 순서는 자연스러운 마크업 순서를 따릅니다.

                //     tabindex="-1"
                //     키보드 초점을 받을 수 있는 요소도 초점을 받을 수 없도록 만들어 줍니다. 초점을 받을 수 없기 때문에 "-1" 이외의 다른 음의 정수 값은 사실상 의미가 없습니다.
                
                >
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header
