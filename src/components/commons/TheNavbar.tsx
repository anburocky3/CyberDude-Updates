import { Link } from 'react-router-dom'
import AcademiconsIdeasRepec from '@components/icons/AcademiconsIdeasRepec';
import TablerSearch from '@components/icons/TablerSearch';
import ClarityMapOutlineAlerted from '../icons/ClarityMapOutlineAlerted';
import Button from './buttons/Button';
import Input from './forms/Input';
import MenuLink from './menus/MenuLink';

function TheNavbar() {
  return (
    <header className='bg-white '>
      <div className="container mx-auto flex justify-between items-center p-5">

        <div className='flex items-center space-x-5'>
          <Link to="/" className='text-xl font-bold text-primary mr-3'>CYBERDUDE</Link>
          <MenuLink to="/roadmap" icon={<ClarityMapOutlineAlerted className="mr-2" />} label='Roadmap' />
          <MenuLink to="/suggestions" icon={<AcademiconsIdeasRepec className="mr-2" />} label='Ideas' />
        </div>
        <div className='flex items-center space-x-4'>
          <div>
            <Input placeholder='Search Ideas...' icon={<TablerSearch />} />
          </div>
          <div className='space-x-4'>
            <Button variant='secondary' label={'Login'} />
            <Button label={'Sign Up'} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default TheNavbar;
