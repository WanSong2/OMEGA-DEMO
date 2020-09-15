import Head from 'next/head'
import component from '../styles/header/component.module.css'
import b2c from '../styles/header/b2c.module.css'
import TopAreaMenu from './topAreaMenu'

export default class MainLayout extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isSlide: false
    }
    this.handleIsSlideChange = this.handleIsSlideChange.bind(this);
  }

  handleIsSlideChange(e) {
    //console.log(e.target.value);
  }

  render() {
    return (
      <div>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <header className={b2c.header}>
              <div className={component.topAreaWrap}>
                  <div className={component.topAreaBox}>

                      <a className={component.topAreaMenu}>
                          <TopAreaMenu 
                            handleIsSlideChange={this.handleIsSlideChange}  
                            isSlide={this.state.isSlide}
                          />
                      </a>
                      
                      <div style={{display: this.state.isSlide ? 'block' : 'none'}}>
                          <div className={`${component.topAreaMenuAll} ${b2c.topAreaMenuAllAir}`}>
                              <ul className={component.topAreaMenu01}>
                                  <li><a href="">공지사항</a></li>
                                  <li><a href="">예약조회</a></li>
                                  <li><a href="">자주하는 질문</a></li>
                                  <li><a href="">커뮤니티</a></li>
                                  <li><a href="">고객센터</a></li>
                              </ul>
                          </div>
                      </div>

                      <a className={component.topAreaLogo} href="http://ticket7.tour2000.co.kr">투어이천</a>
                      <a className={component.topAreaLogIn}><span>로그인</span></a>
                      <div className={component.topAreaIcon}>
                          <a className={component.topAreaIcon04} href="">이벤트n기획전</a>
                          <a className={component.topAreaIcon02} href="">회원가입</a>
                      </div>
                  </div>
              </div>

              <div className={component.topAreaGnb}>
              <div className={`${component.topAreaGnbBox} ${component.air_padding}`}>
                  <ul className={component.topAreaGnbUl}>
                      <li><a href="">주요도시 할인 항공권</a></li>
                      <li><a href="">항공사별 할인 항공권</a></li>
                      <li><a href="">테마 항공권</a></li>
                      <li><a href="">땡처리 항공권</a></li>
                      <li><a className={component.l_line} href="">여행상품</a></li>
                      <li><a className={component.l_line} href="">국내항공</a></li>
                      <li><a href="">호텔예약</a></li>
                  </ul>
              </div>
              </div>
          </header>

        <main>
          {  this.props.children }
        </main>

        <footer>
        </footer>
      </div>
    )
  }
}