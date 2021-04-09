import {ChatList, Header, Layout, MessageList, MessageProvider} from "@components"
import React, {Component} from 'react'
import {Switch, Route} from "react-router-dom"


export class Chat extends Component {
  render() {
    return (
        <Switch>
          <Route path={["/chat/:id", "/chat"]}>

            {(params) => {
              return (
                  <MessageProvider {...params}>
                    {([state]) => (
                        <Layout
                            header={<Header/>}
                            chats={<ChatList/>}>
                          <MessageList {...state} />
                        </Layout>
                    )}
                  </MessageProvider>
              )
            }
            }
          </Route>
          <Route path="*" component={() => <h1>такого чата нет</h1>}/>
        </Switch>
    );
  }

}
