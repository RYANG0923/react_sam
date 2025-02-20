import React from 'react'
const skillText = [
    {
        title: "꿈을 설계하고 디자인하다.",
        desc: "나는 공간을 만드는 것을 좋아한다. 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인거 같다.  그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 살고 싶다."
        //엔터 안됨, 한줄에 다 들어가야함.
    },
    {
        title: "열심히 할수록 기회는 따른다.",
        desc: "나는 공간을 만드는 것을 좋아한다. 운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다.."
    },
    {
        title: "나에게 정직하다.",
        desc: "나는 공간을 만드는 것을 좋아한다. 정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다."
    },

]
const Skill = () => {
    return (
        <section id='skill'>
            <div className="skill_inner">
                <div className="skill_title">
                    Challenge <em>나의 도전</em>
                </div>
                <div className="skill_desc">
                    {skillText.map((skill, key) => (
                        // map을 이용해 skillText skill로 가져오고 key는 인덱스 번호에 대입함.
                        // li의 갯수만큼 돌릴거니까 아래처럼 <li key={key}>로 적어준다.
                        // <span>{key + 1}. </span> 에서 key는 인덱스 번호이므로 0부터 시작함, +1을 해준 것
                        // 중괄호{} 안에 skill.titlel과 skill.desc로 가져와 줌
                        <div key={key}>
                            <span>{key + 1}.</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>

                    ))}


                </div>
            </div>
        </section>
    )
}

export default Skill
