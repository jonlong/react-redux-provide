import 'babel-core/polyfill';
import 'todomvc-app-css/index.css';
import React from 'react';
import { render } from 'react-dom';
import { App } from './components/index';
import providers from './providers/index';

export const context = {
  providers,
  providedState: {
    todoList: [
      {
        value: 'Use redux providers',
        completed: true
      }
    ],

    filterMap: new Map([
      ['All', {
        filter: todoItem => true,
        selected: true
      }],
      ['Active', {
        filter: todoItem => !todoItem.completed
      }],
      ['Completed', {
        filter: todoItem => todoItem.completed
      }]
    ])
  }
};

render(<App { ...context } />, document.getElementById('root'));
