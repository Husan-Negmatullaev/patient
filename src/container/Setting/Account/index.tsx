import React, { memo, useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Text from "elements/Text";
import { Colors, Routes } from "configs";
import Theme from "style/Theme";
import { AVATAR } from "images/Avatar";
import { ICON } from "images/Icon";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import ButtonIcon from "elements/Buttons/ButtonIcon";
import AccountItem from "components/AccountItem";
import { IMAGE } from "images/Image";

export const ACCOUNT_SAMPLE = {
  id: 1,
  name: "Devin Shelton",
  email: "DevinShelton@patientPlus.com",
  accountType: "Standard Account",
};

const Account = memo(() => {
  const { navigate } = useNavigation();
  const [account, setAccount] = useState<any>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setAccount(ACCOUNT_SAMPLE);
    }, [])
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const onInvite = () => {
    navigate(Routes.InviteFriendForYou);
  };

  const onEditButton = () => {};

  return (
    <ScrollView
      style={styles.container}
      scrollEventThrottle={16}
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View style={styles.infoView}>
        <View style={Theme.flexRow}>
          <Image source={AVATAR.avatar2} style={styles.avatar} />
          <View>
            <Text size={15} bold marginBottom={4}>
              {account.name}
            </Text>
            <Text style={styles.email}>{account.email}</Text>
            <Text style={styles.type}>{account.accountType}</Text>
          </View>
        </View>
        <ButtonIcon icon="edit" style={styles.icon} onPress={onEditButton} />
      </View>
      <View style={styles.content}>
        <AccountItem
          route={Routes.AccountFile}
          style={styles.firstView}
          icon={ICON.photoLibrary}
          name="Files"
        />
        <AccountItem
          route={Routes.AccountPaymentMethod}
          style={styles.middleView}
          icon={ICON.payment}
          name="Payment Method"
        />
        <AccountItem
          style={styles.middleView}
          icon={ICON.setting}
          name="Setting"
        />
        <AccountItem
          onPress={toggleDarkMode}
          style={styles.lastView}
          icon={ICON.themeMode}
          name="Dark Mode"
          isToggle={true}
          switchValue={darkMode}
          onValueChange={toggleDarkMode}
        />
      </View>
      <View style={styles.content}>
        <AccountItem
          style={styles.firstView}
          icon={ICON.home}
          name="About Doctor Plus"
        />
        <AccountItem
          style={styles.middleView}
          icon={ICON.help}
          name="Help & Support"
        />
        <AccountItem
          style={styles.middleView}
          icon={ICON.term}
          name="Privacy and Policy"
        />
        <View style={styles.lastView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onInvite}
            style={Theme.flexRow}
          >
            <Image
              style={styles.imageInvite}
              source={IMAGE.inviteFriend}
            />
            <View>
              <Text style={styles.text}>
                Invite friend to give a friend $15 of and get $10 credit for
                you!!
              </Text>
              <TouchableOpacity style={styles.button} onPress={onInvite}>
                <Text color={Colors.White} size={12} center>
                  Invite Now!
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
});

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow,
    paddingTop: getStatusBarHeight() + 52,
  },
  infoView: {
    ...Theme.flexRowSpace,
    marginHorizontal: 24,
    marginBottom: 32,
  },
  avatar: {
    width: 64,
    height: 64,
    marginRight: 16,
  },
  icon: {
    tintColor: Colors.White,
    backgroundColor: Colors.DodgerBlue,
    alignSelf: "flex-start",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
  },
  email: {
    fontSize: 13,
    marginBottom: 8,
  },
  type: {
    fontSize: 13,
    color: Colors.GrayBlue,
  },
  content: {
    marginHorizontal: 24,
    marginVertical: 8,
    backgroundColor: Colors.White,
    borderRadius: 16,
  },
  firstView: {
    ...Theme.flexRowSpace,
    borderBottomColor: Colors.WhiteSmoke,
    borderBottomWidth: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  middleView: {
    ...Theme.flexRowSpace,
    borderBottomColor: Colors.WhiteSmoke,
    borderBottomWidth: 1,
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  lastView: {
    ...Theme.flexRowSpace,
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingRight: 16,
  },
  button: {
    width: 90,
    height: 30,
    borderRadius: 8,
    backgroundColor: Colors.DodgerBlue,
    justifyContent: "center",
    marginTop: 8,
  },
  text: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 200,
    lineHeight: 25,
  },
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 100,
  },
  imageInvite: {
    marginRight: 18,
  },
});
