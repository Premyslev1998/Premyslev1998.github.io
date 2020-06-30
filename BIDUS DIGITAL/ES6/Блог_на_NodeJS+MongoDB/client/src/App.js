import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'react-bootstrap';

import { /*HeaderBlock,*/ /*PostItem,*/ AddForm, /*PostsList,*/ /*FullPost,*/ NotFound } from './components';
import { PostsList, FullPost, HeaderBlock } from './modules';

const test = () => {
	return(
		<>
			<div className="App">
        <Router>
          <div>
            <HeaderBlock />
            <div className="container">
              <div className="content">
                {/* <button type="button" className="btn btn-primary">
              Add post
            </button> */}
                <div className="content">
                  <Switch>
                    <Route path="/" exact component={() => <PostsList />} />
                    <Route path="/post/:id" exact component={FullPost} />
                    <Route path="/post/:id/edit" exact component={AddForm} />
                    <Route path="*" component={NotFound} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
			{/*
				<HeaderBlock 
					title="Заголовок сайта"
					description="Описание"
					imageUrl="https://images.pexels.com/photos/3715436/pexels-photo-3715436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				/>
				<div className="container">
					<div className="content">
						<div className="content">
							<Router>
								<div>
									<Switch>
										<Route 
											path="/"
											exact 
											component={() => (
												<PostsList />
											)} 
										/>
										<Route 
											path="/post/:id"
											exact		
											//component={() => (
											//	<FullPost title="Заголовок статьи" createdAt={'' + new Date()} />
											//)}
											component={FullPost}
										/>
										<Route 
											path="/post/:id/Edit"
											exact		
											component={AddForm} 
										/>
										)} />
										<Route path="*" component={NotFound} />
									</Switch>
								</div>
							</Router>
						</div>
					</div>
				</div>
			*/}
		</>
	);
}

export default test;
