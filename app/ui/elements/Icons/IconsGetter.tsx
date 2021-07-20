import KeyInHand from './advantages/KeyInHand';
import MoneyBag from './advantages/MoneyBag';
import MoneyTime from './advantages/MoneyTime';
import Stock from './advantages/Stock';
import StockBag from './advantages/StockBag';
import UpHouseTrand from './advantages/UpHouseTrand';

const IconsGetter = ({ iconName, extraInfo = {} }) => {
  switch (iconName) {
    case 'KeyInHand':
      return <KeyInHand />;
    case 'MoneyBag':
      return <MoneyBag />;
    case 'MoneyTime':
      return <MoneyTime />;
    case 'Stock':
      return <Stock />;
    case 'StockBag':
      return <StockBag />;
    case 'UpHouseTrand':
      return <UpHouseTrand />;
    default:
      return null;
  }
};

export default IconsGetter;
