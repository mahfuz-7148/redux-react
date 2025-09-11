import {Count} from './Count.jsx';
import {Button} from './Button.jsx';

export const Counter = ({count, onIncrement, onDecrement}) => {

  return (
    <div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
      <Count count={count}/>
      <div className='flex space-x-3'>
        <Button handler={onIncrement}>Increment</Button>
        <Button type='danger' handler={onDecrement}>Decrement</Button>
      </div>
    </div>
  )
}
