import Users from './User'
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
test('Class Component Method testing',()=>{
    const componentdata= renderer.create(<Users/>).getInstance();
    expect(componentdata.getUserList()).toMatch('user list')

})