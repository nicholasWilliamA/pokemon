import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeNavigationStackParams } from './navigations/Home/HomeNavigationStackParams';

export type HomeNavigationStackScreenProps<
    T extends keyof HomeNavigationStackParams
> = NativeStackScreenProps<HomeNavigationStackParams, T>;
