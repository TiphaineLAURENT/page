import { useState } from 'react'

import { Button } from './Button/Button'
import { Buttons } from './Button/Buttons'
import logo from './logo.svg'
import './App.css'
import { Brand } from './Navbar/Brand'
import { Burger } from './Navbar/Burger'
import { Divider } from './Navbar/Divider'
import { Dropdown } from './Navbar/Dropdown'
import { Item } from './Navbar/Item'
import { Menu } from './Navbar/Menu'
import { Navbar } from './Navbar/Navbar'
import { settings } from './settings'

function App() {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)

  return (
    <>
      <Navbar fixed={'top'} hasShadow>
        <Brand>
          <Item>
            <img src={'https://bulma.io/images/bulma-logo.png'} width={'112'} height={'28'} />
          </Item>
          <Burger active={menuOpened} setActive={setMenuOpened} />
        </Brand>
        <Menu
          active={menuOpened}
          start={{
            children: (
              <>
                <Item>Home</Item>
                <Item>Documentation</Item>
                <Dropdown hoverable link={'More'}>
                  <Item>About</Item>
                  <Item active>Jobs</Item>
                  <Item>Contact</Item>
                  <Divider />
                  <Item>Report an issue</Item>
                </Dropdown>
              </>
            ),
          }}
          end={{
            children: (
              <Item>
                <Buttons>
                  <Button tag={'a'} color={'primary'}>
                    <strong>Sign up</strong>
                  </Button>
                  <Button tag={'a'} color={'light'}>
                    Log in
                  </Button>
                </Buttons>
              </Item>
            ),
          }}
        />
      </Navbar>
      <main>
        <section className={'section'}>
          <figure className={'image is-1by1'}>
            <img src={logo} alt={'logo'} height={'333px'} width={'512px'} />
          </figure>
          <div className={'container'}>
            <h1 className={'title'}>Hello World</h1>
            <p className={'subtitle'}>
              My first website with <strong>Bulma</strong>!
            </p>
            <article className={'message is-info'}>
              <header className={'message-header'}>
                <p>Settings</p>
              </header>
              <div className={'message-body'}>
                <pre>{JSON.stringify(settings, null, 2)}</pre>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
