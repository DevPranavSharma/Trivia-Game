import {StyleSheet} from 'react-native';
import {convertHeight as ch, convertWidth as cw} from '../../helpers/style';
import {colors} from '../../assets/colors';
export const styles = StyleSheet.create({
  info: {
    backgroundColor: colors.darkBlue,
    marginTop: ch('9%'),
    flexDirection: 'row',
    borderRadius: 50,
    height: ch('6%'),
    width: cw('80%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.white,
  },
  name: {
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: colors.white,
  },
  nameText: {
    color: colors.white,
    fontSize: cw('4%'),
    fontWeight: '400',
    fontFamily: 'AvenirNext-Regular',
    marginLeft: cw('5%'),
  },
  level: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    marginTop: ch('7%'),
    borderRadius: 5,
    height: ch('60%'),
    padding: cw('8%'),
    borderWidth: 1,
    borderColor: colors.white,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: ch('15%'),
  },
  questionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionCategory: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitle: {
    color: colors.white,
    fontSize: cw('4%'),
    fontWeight: '600',
    fontFamily: 'AvenirNext-Regular',
  },
  questionTitle: {
    flex: 0.8,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: cw('6%'),
    fontWeight: '300',
    fontFamily: 'AvenirNext-UltraLightItalic',
  },
  buttons: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  falseButton: {
    backgroundColor: colors.lightcoral,
    height: ch('8%'),
    width: ch('8%'),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trueButton: {
    backgroundColor: colors.lightgreen,
    height: ch('8%'),
    width: ch('8%'),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationStyle: {
    marginBottom: ch('6%'),
  },
  dotStyle: {
    width: ch('1%'),
    height: ch('1%'),
    borderRadius: 50,
    backgroundColor: colors.white,
  },
});
