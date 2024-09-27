import css from './Loader.module.css';
import { MagnifyingGlass } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <MagnifyingGlass
          visible={true}
          ariaLabel="magnifying-glass-loading"
          height="150"
          width="150"
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#cff09e"
          color="#507c5c"
        />
      </div>
    </div>
  );
}
