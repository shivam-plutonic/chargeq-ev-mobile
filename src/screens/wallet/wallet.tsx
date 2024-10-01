// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import { Card, Title, ActivityIndicator } from 'react-native-paper';
// import HeaderComponent from '../../components/header/HeaderComponent';
// import BaseProps from '../../types/BaseProps';
//
// // Define types for wallet balance and transactions
// interface Transaction {
//   id: string;
//   date: string;
//   amount: number;
//   type: 'Credit' | 'Debit';  // Example types
// }
// export interface Props extends BaseProps {}
//
// const Wallet: React.FC<Props> = (props) => {
//   const [walletBalance, setWalletBalance] = useState<number>(0);
//   const [transactions, setTransactions] = useState<Transaction[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [activeTab, setActiveTab] = useState<string>('Balance');  // Track active tab
//
//   useEffect(() => {
//     // Fetch wallet data when the component loads
//     const fetchWalletData = async () => {
//       try {
//         setLoading(true);
//         // Fetch balance and transaction data
//         const balanceResponse = await axios.get<{ balance: number }>('/api/wallet/balance');
//         const transactionsResponse = await axios.get<{ transactions: Transaction[] }>('/api/wallet/transactions');
//
//         setWalletBalance(balanceResponse.data.balance);
//         setTransactions(transactionsResponse.data.transactions);
//       } catch (error) {
//         console.error('Error fetching wallet data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//
//     fetchWalletData();
//   }, []);
//
//   // Render each transaction in the list
//   const renderTransaction = ({ item }: { item: Transaction }) => (
//     <Card style={styles.transactionCard}>
//       <View style={styles.transactionInfo}>
//         <Text style={styles.transactionText}>Transaction ID: {item.id}</Text>
//         <Text style={styles.transactionText}>Date: {item.date}</Text>
//         <Text style={styles.transactionText}>Amount: ${item.amount}</Text>
//         <Text style={styles.transactionText}>Type: {item.type}</Text>
//       </View>
//     </Card>
//   );
//
//   if (loading) {
//     return <ActivityIndicator size="large" style={styles.loader} />;
//   }
//
//   return (
//     <View style={styles.container}>
//       {/* Toggle Buttons    */}
//        <HeaderComponent
//                                                 sideBar={props.canOpenDrawer}
//                                                 navigation={navigation}
//                                                 title={I18n.t('sidebar.wallet')}
//                                                 subTitle={count > 0 ? `(${I18nManager.formatNumber(count)})` : null}
//                                               />
//
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[styles.tabButton, activeTab === 'Balance' && styles.activeTab]}
//           onPress={() => setActiveTab('Balance')}>
//           <Text style={styles.tabButtonText}>Balance</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.tabButton, activeTab === 'Transactions' && styles.activeTab]}
//           onPress={() => setActiveTab('Transactions')}>
//           <Text style={styles.tabButtonText}>Transactions</Text>
//         </TouchableOpacity>
//       </View>
//
//       {/* Conditional Rendering */}
//       {activeTab === 'Balance' ? (
//         <Card style={styles.balanceCard}>
//           <Title style={styles.title}>Wallet Balance: ${walletBalance}</Title>
//         </Card>
//       ) : (
//         <Card style={styles.historyCard}>
//           <Title style={styles.title}>Transaction History</Title>
//           <FlatList
//             data={transactions}
//             renderItem={renderTransaction}
//             keyExtractor={(item) => item.id}
//           />
//         </Card>
//       )}
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   tabButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//   },
//   activeTab: {
//     backgroundColor: '#007bff',
//   },
//   tabButtonText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   balanceCard: {
//     padding: 20,
//   },
//   historyCard: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 22,
//     marginBottom: 10,
//   },
//   transactionCard: {
//     marginBottom: 10,
//     padding: 15,
//   },
//   transactionInfo: {
//     flexDirection: 'column',
//   },
//   transactionText: {
//     fontSize: 16,
//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
//
// export default Wallet;

//
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import BaseAutoRefreshScreen from '../base-screen/BaseAutoRefreshScreen';
// import axios from 'axios';
// import { Card, Title, ActivityIndicator } from 'react-native-paper';
// import HeaderComponent from '../../components/header/HeaderComponent';
// import BaseProps from '../../types/BaseProps';
//
// // Define types for wallet balance and transactions
// interface Transaction {
//   id: string;
//   date: string;
//   amount: number;
//   type: 'Credit' | 'Debit';  // Example types
// }
//
// export interface Props extends BaseProps {}
//
// const Wallet: React.FC<Props> = (props) => {  // Accept props of type Props
//   const [walletBalance, setWalletBalance] = useState<number>(0);
//   const [transactions, setTransactions] = useState<Transaction[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [activeTab, setActiveTab] = useState<string>('Balance');  // Track active tab
//   const { navigation } = props;
//   useEffect(() => {
//     // Fetch wallet data when the component loads
//     const fetchWalletData = async () => {
//       try {
//         setLoading(true);
//         // Fetch balance and transaction data
//         const balanceResponse = await axios.get<{ balance: number }>('/api/wallet/balance');
//         const transactionsResponse = await axios.get<{ transactions: Transaction[] }>('/api/wallet/transactions');
//
//         setWalletBalance(balanceResponse.data.balance);
//         setTransactions(transactionsResponse.data.transactions);
//       } catch (error) {
//         console.error('Error fetching wallet data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//
//     fetchWalletData();
//   }, []);
//
//   // Render each transaction in the list
//   const renderTransaction = ({ item }: { item: Transaction }) => (
//     <Card style={styles.transactionCard}>
//       <View style={styles.transactionInfo}>
//         <Text style={styles.transactionText}>Transaction ID: {item.id}</Text>
//         <Text style={styles.transactionText}>Date: {item.date}</Text>
//         <Text style={styles.transactionText}>Amount: ${item.amount}</Text>
//         <Text style={styles.transactionText}>Type: {item.type}</Text>
//       </View>
//     </Card>
//   );
//
//   if (loading) {
//     return <ActivityIndicator size="large" style={styles.loader} />;
//   }
//
//   return (
//     <View style={styles.container}>
//       {/* HeaderComponent with Props */}
//       <HeaderComponent
//         sideBar={props.canOpenDrawer}  // Using props from BaseProps
//         navigation={navigation}  // Passing navigation from props
//         title={'Wallet'}               // Custom title
//         subTitle={walletBalance ? `(${walletBalance})` : null} // Example subtitle with wallet balance
//       />
//
//       {/* Toggle Buttons */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[styles.tabButton, activeTab === 'Balance' && styles.activeTab]}
//           onPress={() => setActiveTab('Balance')}>
//           <Text style={styles.tabButtonText}>Balance</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.tabButton, activeTab === 'Transactions' && styles.activeTab]}
//           onPress={() => setActiveTab('Transactions')}>
//           <Text style={styles.tabButtonText}>Transactions</Text>
//         </TouchableOpacity>
//       </View>
//
//       {/* Conditional Rendering */}
//       {activeTab === 'Balance' ? (
//         <Card style={styles.balanceCard}>
//           <Title style={styles.title}>Wallet Balance: ${walletBalance}</Title>
//         </Card>
//       ) : (
//         <Card style={styles.historyCard}>
//           <Title style={styles.title}>Transaction History</Title>
//           <FlatList
//             data={transactions}
//             renderItem={renderTransaction}
//             keyExtractor={(item) => item.id}
//           />
//         </Card>
//       )}
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   tabButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//   },
//   activeTab: {
//     backgroundColor: '#007bff',
//   },
//   tabButtonText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   balanceCard: {
//     padding: 20,
//   },
//   historyCard: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 22,
//     marginBottom: 10,
//   },
//   transactionCard: {
//     marginBottom: 10,
//     padding: 15,
//   },
//   transactionInfo: {
//     flexDirection: 'column',
//   },
//   transactionText: {
//     fontSize: 16,
//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
//
// export default Wallet;
//



//
// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { Card, Title, ActivityIndicator } from 'react-native-paper';
// import axios from 'axios';
// import HeaderComponent from '../../components/header/HeaderComponent';
// import BaseAutoRefreshScreen from '../base-screen/BaseAutoRefreshScreen';
// import BaseProps from '../../types/BaseProps';
//
// // Define types for wallet balance and transactions
// interface Transaction {
//   id: string;
//   date: string;
//   amount: number;
//   type: 'Credit' | 'Debit';
// }
//
// interface State {
//   walletBalance: number;
//   transactions: Transaction[];
//   loading: boolean;
//   activeTab: string;
// }
//
// export interface Props extends BaseProps {
//   // Additional props specific to Wallet
// }
//
// class Wallet extends BaseAutoRefreshScreen<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       walletBalance: 0,
//       transactions: [],
//       loading: true,
//       activeTab: 'Balance',  // Default to Balance tab
//     };
//   }
//
//   // Fetch wallet data
//   fetchWalletData = async () => {
//     try {
//       this.setState({ loading: true });
//       const balanceResponse = await axios.get<{ balance: number }>('/api/wallet/balance');
//       const transactionsResponse = await axios.get<{ transactions: Transaction[] }>('/api/wallet/transactions');
//
//       this.setState({
//         walletBalance: balanceResponse.data.balance,
//         transactions: transactionsResponse.data.transactions,
//         loading: false,
//       });
//     } catch (error) {
//       console.error('Error fetching wallet data:', error);
//       this.setState({ loading: false });
//     }
//   };
//
//   componentDidMount() {
//     this.fetchWalletData();
//
//     // Simulate auto-refresh every 60 seconds
//     this.autoRefreshId = setInterval(this.fetchWalletData, 60000);
//   }
//
//   componentWillUnmount() {
//     // Clear the interval when the component unmounts
//     clearInterval(this.autoRefreshId);
//   }
//
//   // Render each transaction in the list
//   renderTransaction = ({ item }: { item: Transaction }) => (
//     <Card style={styles.transactionCard}>
//       <View style={styles.transactionInfo}>
//         <Text style={styles.transactionText}>Transaction ID: {item.id}</Text>
//         <Text style={styles.transactionText}>Date: {item.date}</Text>
//         <Text style={styles.transactionText}>Amount: ${item.amount}</Text>
//         <Text style={styles.transactionText}>Type: {item.type}</Text>
//       </View>
//     </Card>
//   );
//
//   render() {
//     const { loading, walletBalance, transactions, activeTab } = this.state;
//     const { canOpenDrawer, navigation } = this.props;
//
//     if (loading) {
//       return <ActivityIndicator size="large" style={styles.loader} />;
//     }
//
//     return (
//       <View style={styles.container}>
//         {/* Use props */}
//         <HeaderComponent
//           sideBar={this.canOpenDrawer}
//           navigation={navigation}
//           title="Wallet"
//           subTitle={null}  // Example
//         />
//
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'Balance' && styles.activeTab]}
//             onPress={() => this.setState({ activeTab: 'Balance' })}>
//             <Text style={styles.tabButtonText}>Balance</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'Transactions' && styles.activeTab]}
//             onPress={() => this.setState({ activeTab: 'Transactions' })}>
//             <Text style={styles.tabButtonText}>Transactions</Text>
//           </TouchableOpacity>
//         </View>
//
//         {activeTab === 'Balance' ? (
//           <Card style={styles.balanceCard}>
//             <Title style={styles.title}>Wallet Balance: ${walletBalance}</Title>
//           </Card>
//         ) : (
//           <Card style={styles.historyCard}>
//             <Title style={styles.title}>Transaction History</Title>
//             <FlatList
//               data={transactions}
//               renderItem={this.renderTransaction}
//               keyExtractor={(item) => item.id}
//             />
//           </Card>
//         )}
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   tabButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//   },
//   activeTab: {
//     backgroundColor: '#007bff',
//   },
//   tabButtonText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   balanceCard: {
//     padding: 20,
//   },
//   historyCard: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 22,
//     marginBottom: 10,
//   },
//   transactionCard: {
//     marginBottom: 10,
//     padding: 15,
//   },
//   transactionInfo: {
//     flexDirection: 'column',
//   },
//   transactionText: {
//     fontSize: 16,
//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
//
// export default Wallet;
//

//
// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { Card, Title, ActivityIndicator, Button, TextInput } from 'react-native-paper';
// import axios from 'axios';
// import HeaderComponent from '../../components/header/HeaderComponent';
// import BaseAutoRefreshScreen from '../base-screen/BaseAutoRefreshScreen';
// import BaseProps from '../../types/BaseProps';
// import Utils from '../../utils/Utils';
// import CentralServerProvider from '../../provider/CentralServerProvider';
// import UserToken from '../../types/UserToken';
// import ProviderFactory from '../../provider/ProviderFactory';
//
// // Define types for wallet balance and transactions
// interface Transaction {
//   id: string;
//   date: string;
//   amount: number;
//   type: 'Credit' | 'Debit';
//   description: string;
// }
//
// interface State {
//   walletBalance: number;
//   userToken?: UserToken;
//   id: string;
//   transactions: Transaction[];
//   loading: boolean;
//   activeTab: string;
//   showRechargeInput: boolean;
//   rechargeAmount: string;
//   calculatedGST: number | null;
//   adjustedAmount: number | null;
//   showFilters: boolean;
//   startDate: string;
//   endDate: string;
// }
//
// export interface Props extends BaseProps {
//   // Additional props specific to Wallet
// }
//
// class Wallet extends BaseAutoRefreshScreen<Props, State> {
//     private centralServerProvider: CentralServerProvider;
//   public constructor(props: Props) {
//       console.log(props, 'ayush ');
//     super(props);
//
//     this.state = {
//       walletBalance: 0,
//       userToken: null,
//       transactions: [],
//       id:null,
//       loading: true,
//       activeTab: 'Balance',  // Default to Balance tab
//       showRechargeInput: false,
//       rechargeAmount: '',
//       calculatedGST: null,
//       adjustedAmount: null,
//       showFilters: false,
//       startDate: '',
//       endDate: '',
//     };
//   }
//
//   public setState = (
//       state: State | ((prevState: Readonly<State>, props: Readonly<Props>) => State | Pick<State, never>) | Pick<State, never>,
//       callback?: () => void
//     ) => {
//       super.setState(state, callback);
//     };
//
//    public getUserInfo()  {
//       // Logoff
//       const userInfo = this.centralServerProvider.getUserInfo();
//       this.setState({
//         userToken: this.centralServerProvider.getUserInfo(),
//         id: userInfo.id,
//       });
//   console.log(this.state.id,  '----------------------------------------------------------------------------------------------'  );
//   };
//
//   // Fetch wallet data
//   fetchWalletData = async () => {
//     try {
//       this.setState({ loading: true });
//       const balanceResponse = await this.centralServerProvider.getWalletBalance(this.state.id);
// //       const transactionsResponse = await axios.get<{ transactions: Transaction[] }>('/api/wallet/transactions');
//
//       this.setState({
//         walletBalance: balanceResponse.balance,
// //         transactions: transactionsResponse.data.transactions,
//         loading: false,
//       });
//     } catch (error) {
//       console.error('Error fetching wallet data:', error);
//       this.setState({ loading: false });
//     }
//   };
//
//   public async componentDidMount() {
//       this.centralServerProvider = await ProviderFactory.getProvider();
//       await this.getUserInfo();
//      this.fetchWalletData();
//      this.autoRefreshId = setInterval(this.fetchWalletData, 60000);
//   }
//
//
//
//
//   componentWillUnmount() {
//     clearInterval(this.autoRefreshId);
//   }
//
//   // Handle amount change for recharge
//   onAmountChange = (amount: string) => {
//     this.setState({ rechargeAmount: amount });
//     const numericAmount = parseFloat(amount);
//
//     if (!isNaN(numericAmount)) {
//       const gst = numericAmount * 0.18;
//       const adjusted = numericAmount - gst;
//       this.setState({
//         calculatedGST: gst,
//         adjustedAmount: adjusted,
//       });
//     } else {
//       this.setState({ calculatedGST: null, adjustedAmount: null });
//     }
//   };
//
//   // Handle wallet recharge
//   rechargeWallet = () => {
//     const { adjustedAmount } = this.state;
//     if (adjustedAmount !== null) {
//       console.log(`Recharging wallet with: ${adjustedAmount} ZF Coins (GST included)`);
//       // Perform wallet recharge operation here...
//       this.setState({ showRechargeInput: false, rechargeAmount: '', calculatedGST: null, adjustedAmount: null });
//     }
//   };
//
//   // Render each transaction in the list
//   renderTransaction = ({ item }: { item: Transaction }) => (
//     <Card style={styles.transactionCard}>
//       <View style={styles.transactionInfo}>
//         <Text style={styles.transactionText}>Transaction ID: {item.id}</Text>
//         <Text style={styles.transactionText}>Date: {item.date}</Text>
//         <Text style={styles.transactionText}>Amount: ${item.amount}</Text>
//         <Text style={styles.transactionText}>Type: {item.type}</Text>
//       </View>
//     </Card>
//   );
//
//   render() {
//     const { loading, walletBalance, transactions, activeTab, showRechargeInput, rechargeAmount, calculatedGST, adjustedAmount } = this.state;
//     const { canOpenDrawer, navigation } = this.props;
//
//     if (loading) {
//       return <ActivityIndicator size="large" style={styles.loader} />;
//     }
//
//     return (
//       <View style={styles.container}>
//         {/* Use props */}
//         <HeaderComponent
//           sideBar={this.canOpenDrawer}
//           navigation={navigation}
//           title="Wallet"
//           subTitle={null}  // Example
//         />
//
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'Balance' && styles.activeTab]}
//             onPress={() => this.setState({ activeTab: 'Balance' })}>
//             <Text style={styles.tabButtonText}>Balance</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'Transactions' && styles.activeTab]}
//             onPress={() => this.setState({ activeTab: 'Transactions' })}>
//             <Text style={styles.tabButtonText}>Transactions</Text>
//           </TouchableOpacity>
//         </View>
//
//         {activeTab === 'Balance' ? (
//           <View>
//             <Card style={styles.balanceCard}>
//               <Title style={styles.title}>Wallet Balance: ${walletBalance}</Title>
//               <TouchableOpacity
//                 onPress={() => this.setState({ showRechargeInput: !showRechargeInput })}
//                 style={styles.rechargeButton}>
//                 <Text style={styles.rechargeButtonText}>
//                   {showRechargeInput ? 'Cancel Recharge' : 'Recharge Wallet'}
//                 </Text>
//               </TouchableOpacity>
//             </Card>
//
//             {showRechargeInput && (
//               <Card style={styles.rechargeCard}>
//                 <Title style={styles.title}>Enter Recharge Amount</Title>
//                 <TextInput
//                   label="Recharge Amount"
//                   value={rechargeAmount}
//                   onChangeText={this.onAmountChange}
//                   keyboardType="numeric"
//                   style={styles.input}
//                 />
//                 {calculatedGST !== null && (
//                   <View style={styles.gstInfo}>
//                     <Text>Amount after GST: ${adjustedAmount?.toFixed(2)} ZF Coins</Text>
//                     <Text>GST (18%): ${calculatedGST?.toFixed(2)}</Text>
//                   </View>
//                 )}
//                 <Button
//                   mode="contained"
//                   onPress={this.rechargeWallet}
//                   disabled={!rechargeAmount || isNaN(Number(rechargeAmount))}>
//                   Recharge
//                 </Button>
//               </Card>
//             )}
//           </View>
//         ) : (
// //           <Card style={styles.historyCard}>
// //             <Title style={styles.title}>Transaction History</Title>
// //             <FlatList
// //               data={transactions}
// //               renderItem={this.renderTransaction}
// //               keyExtractor={(item) => item.id}
// //             />
// //           </Card>
//  <Card style={styles.historyCard}>
//             <View style={styles.filterContainer}>
//               <Text style={styles.title}>Wallet Transaction History</Text>
//               <Button
//                 mode="outlined"
//                 onPress={() => this.setState({ showFilters: !showFilters })}>
//                 {showFilters ? 'Hide Filters' : 'Show Filters'}
//               </Button>
//               {showFilters && (
//                 <View style={styles.filterForm}>
//                   <TextInput
//                     label="Start Date"
//                     value={this.state.startDate}
//                     onChangeText={(text) => this.setState({ startDate: text })}
//                     style={styles.input}
//                   />
//                   <TextInput
//                     label="End Date"
//                     value={this.state.endDate}
//                     onChangeText={(text) => this.setState({ endDate: text })}
//                     style={styles.input}
//                   />
//                   <Button onPress={this.applyFilters}>Apply</Button>
//                   <Button onPress={this.resetFilters}>Reset</Button>
//                 </View>
//               )}
//             </View>
//
//             <View style={styles.transactionTable}>
//               <View style={styles.transactionHeader}>
//                 <Text style={styles.transactionHeaderText}>Date</Text>
//                 <Text style={styles.transactionHeaderText}>Amount</Text>
//                 <Text style={styles.transactionHeaderText}>Type</Text>
//                 <Text style={styles.transactionHeaderText}>Description</Text>
//               </View>
//               <FlatList
//                 data={transactions}
//                 renderItem={this.renderTransaction}
//                 keyExtractor={(item) => item.id}
//               />
//             </View>
//           </Card>
//         )}
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//     marginTop: 20
//   },
//
//   tabButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//   },
//   activeTab: {
//     backgroundColor: '#007bff',
//   },
//   tabButtonText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   balanceCard: {
//     padding: 20,
//   },
//   rechargeButton: {
//     marginTop: 10,
//   },
//   rechargeButtonText: {
//     color: '#007bff',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   rechargeCard: {
//     padding: 20,
//     marginTop: 20,
//   },
//   historyCard: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 22,
//     marginBottom: 10,
//   },
//   input: {
//     marginBottom: 16,
//   },
//   gstInfo: {
//     marginBottom: 16,
//   },
//   transactionCard: {
//     marginBottom: 10,
//     padding: 15,
//   },
//   transactionInfo: {
//     flexDirection: 'column',
//   },
//   transactionText: {
//     fontSize: 16,
//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
//
// export default Wallet;
//


//
//
//
// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
// import { Card, Title, ActivityIndicator, Button } from 'react-native-paper';
// import axios from 'axios';
// import HeaderComponent from '../../components/header/HeaderComponent';
// import BaseAutoRefreshScreen from '../base-screen/BaseAutoRefreshScreen';
// import BaseProps from '../../types/BaseProps';
// import CentralServerProvider from '../../provider/CentralServerProvider';
// import UserToken from '../../types/UserToken';
// import ProviderFactory from '../../provider/ProviderFactory';
//
// // Define types for wallet balance and transactions
// interface Transaction {
//   id: string;
//   date: string;
//   amount: number;
//   type: 'Credit' | 'Debit';
//   description: string; // Added description for transaction
// }
//
// interface State {
//   walletBalance: number;
//   userToken?: UserToken;
//   id: string;
//   transactions: Transaction[];
//   loading: boolean;
//   activeTab: string;
//   showRechargeInput: boolean;
//   rechargeAmount: string;
//   calculatedGST: number | null;
//   adjustedAmount: number | null;
//   showFilters: boolean;
//   startDate: string;
//   endDate: string;
// }
//
// export interface Props extends BaseProps {
//   // Additional props specific to Wallet
// }
//
// class Wallet extends BaseAutoRefreshScreen<Props, State> {
//   private centralServerProvider: CentralServerProvider;
//
//   public constructor(props: Props) {
//     super(props);
//
//     this.state = {
//       walletBalance: 0,
//       userToken: null,
//       transactions: [],
//       id: null,
//       loading: true,
//       activeTab: 'Balance', // Default to Balance tab
//       showRechargeInput: false,
//       rechargeAmount: '',
//       calculatedGST: null,
//       adjustedAmount: null,
//       showFilters: false,
//       startDate: '',
//       endDate: '',
//     };
//   }
//
//   // Fetch wallet data
//   fetchWalletData = async () => {
//     try {
//       this.setState({ loading: true });
//       console.log(this.state,'----=================================----');
//       const balanceResponse = await this.centralServerProvider.getWalletBalance(this.state.id);
//
// //       const transactionsResponse = await axios.get<{ transactions: Transaction[] }>('/api/wallet/transactions', {
// //         params: {
// //           startDate: this.state.startDate,
// //           endDate: this.state.endDate,
// //         },
// //       });
//
//       this.setState({
//         walletBalance: balanceResponse.balance,
// //         transactions: transactionsResponse.data.transactions,
//         loading: false,
//       });
//     } catch (error) {
//       console.error('Error fetching wallet data:', error);
//       this.setState({ loading: false });
//     }
//   };
//
//    public setState = (
//         state: State | ((prevState: Readonly<State>, props: Readonly<Props>) => State | Pick<State, never>) | Pick<State, never>,
//         callback?: () => void
//       ) => {
//         super.setState(state, callback);
//       };
//
//    public getUserInfo()  {
//         // Logoff
//         const userInfo = this.centralServerProvider.getUserInfo();
//         this.setState({
//           userToken: this.centralServerProvider.getUserInfo(),
//           id: userInfo.id,
//         });
//     console.log(this.state.id,  '----------------------------------------------------------------------------------------------'  );
//     };
//
//   public async componentDidMount() {
//     this.centralServerProvider = await ProviderFactory.getProvider();
//     await this.getUserInfo();
//     this.fetchWalletData();
//     this.autoRefreshId = setInterval(this.fetchWalletData, 60000);
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.autoRefreshId);
//   }
//
//   // Handle filter form submission
//   applyFilters = () => {
//     this.fetchWalletData();
//     this.setState({ showFilters: false });
//   };
//
//   resetFilters = () => {
//     this.setState({ startDate: '', endDate: '' }, this.fetchWalletData);
//   };
//
//   // Render each transaction in the table
//   renderTransaction = ({ item }: { item: Transaction }) => (
//     <View style={styles.transactionRow}>
//       <Text style={styles.transactionText}>{item.date}</Text>
//       <Text style={styles.transactionText}>${item.amount.toFixed(2)}</Text>
//       <Text style={styles.transactionText}>{item.type}</Text>
//       <Text style={styles.transactionText}>{item.description}</Text>
//     </View>
//   );
//
//   render() {
//     const { loading, walletBalance, transactions, activeTab, showRechargeInput, rechargeAmount, calculatedGST, adjustedAmount, showFilters } = this.state;
//     const { canOpenDrawer, navigation } = this.props;
//
//     if (loading) {
//       return <ActivityIndicator size="large" style={styles.loader} />;
//     }
//
//     return (
//       <View style={styles.container}>
//         <HeaderComponent
//           sideBar={this.canOpenDrawer}
//           navigation={navigation}
//           title="Wallet"
//           subTitle={null}
//         />
//
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'Balance' && styles.activeTab]}
//             onPress={() => this.setState({ activeTab: 'Balance' })}>
//             <Text style={styles.tabButtonText}>Balance</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'Transactions' && styles.activeTab]}
//             onPress={() => this.setState({ activeTab: 'Transactions' })}>
//             <Text style={styles.tabButtonText}>Transactions</Text>
//           </TouchableOpacity>
//         </View>
//
//         {activeTab === 'Balance' ? (
//           <View>
//             <Card style={styles.balanceCard}>
//               <Title style={styles.title}>Wallet Balance: ${walletBalance}</Title>
//               <TouchableOpacity
//                 onPress={() => this.setState({ showRechargeInput: !showRechargeInput })}
//                 style={styles.rechargeButton}>
//                 <Text style={styles.rechargeButtonText}>
//                   {showRechargeInput ? 'Cancel Recharge' : 'Recharge Wallet'}
//                 </Text>
//               </TouchableOpacity>
//             </Card>
//
//             {showRechargeInput && (
//               <Card style={styles.rechargeCard}>
//                 <Title style={styles.title}>Enter Recharge Amount</Title>
//                 <TextInput
//                   label="Recharge Amount"
//                   value={rechargeAmount}
//                   onChangeText={this.onAmountChange}
//                   keyboardType="numeric"
//                   style={styles.input}
//                 />
//                 {calculatedGST !== null && (
//                   <View style={styles.gstInfo}>
//                     <Text>Amount after GST: ${adjustedAmount?.toFixed(2)} ZF Coins</Text>
//                     <Text>GST (18%): ${calculatedGST?.toFixed(2)}</Text>
//                   </View>
//                 )}
//                 <Button
//                   mode="contained"
//                   onPress={this.rechargeWallet}
//                   disabled={!rechargeAmount || isNaN(Number(rechargeAmount))}>
//                   Recharge
//                 </Button>
//               </Card>
//             )}
//           </View>
//         ) : (
//           <Card style={styles.historyCard}>
//             <View style={styles.filterContainer}>
//               <Text style={styles.title}>Wallet Transaction History</Text>
//               <Button
//                 mode="outlined"
//                 onPress={() => this.setState({ showFilters: !showFilters })}>
//                 {showFilters ? 'Hide Filters' : 'Show Filters'}
//               </Button>
//               {showFilters && (
//                 <View style={styles.filterForm}>
//                   <TextInput
//                     label="Start Date"
//                     value={this.state.startDate}
//                     onChangeText={(text) => this.setState({ startDate: text })}
//                     style={styles.input}
//                   />
//                   <TextInput
//                     label="End Date"
//                     value={this.state.endDate}
//                     onChangeText={(text) => this.setState({ endDate: text })}
//                     style={styles.input}
//                   />
//                   <Button onPress={this.applyFilters}>Apply</Button>
//                   <Button onPress={this.resetFilters}>Reset</Button>
//                 </View>
//               )}
//             </View>
//
//             <View style={styles.transactionTable}>
//               <View style={styles.transactionHeader}>
//                 <Text style={styles.transactionHeaderText}>Date</Text>
//                 <Text style={styles.transactionHeaderText}>Amount</Text>
//                 <Text style={styles.transactionHeaderText}>Type</Text>
//                 <Text style={styles.transactionHeaderText}>Description</Text>
//               </View>
//               <FlatList
//                 data={transactions}
//                 renderItem={this.renderTransaction}
//                 keyExtractor={(item) => item.id}
//               />
//             </View>
//           </Card>
//         )}
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//     marginTop: 20
//   },
//   tabButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//   },
//   activeTab: {
//     backgroundColor: '#007bff',
//   },
//   tabButtonText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   balanceCard: {
//     padding: 20,
//   },
//   rechargeButton: {
//     marginTop: 10,
//   },
//   rechargeButtonText: {
//     color: '#007bff',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   rechargeCard: {
//     padding: 20,
//     marginTop: 20,
//   },
//   historyCard: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   loader: {
//     marginTop: 20,
//   },
//   filterContainer: {
//     marginBottom: 10,
//   },
//   filterForm: {
//     flexDirection: 'column',
//     marginVertical: 10,
//   },
//   input: {
//     marginVertical: 5,
//   },
//   transactionTable: {
//     marginTop: 10,
//   },
//   transactionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     backgroundColor: '#e0e0e0',
//   },
//   transactionHeaderText: {
//     fontWeight: 'bold',
//     flex: 1,
//     textAlign: 'center',
//   },
//   transactionRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   transactionText: {
//     flex: 1,
//     textAlign: 'center',
//   },
//   gstInfo: {
//     marginTop: 10,
//   },
// });
//
// export default Wallet;

//
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
//   Platform,
// } from 'react-native';
// import { Card, Title, ActivityIndicator, Button } from 'react-native-paper';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import axios from 'axios';
// import HeaderComponent from '../../components/header/HeaderComponent';
// import BaseAutoRefreshScreen from '../base-screen/BaseAutoRefreshScreen';
// import BaseProps from '../../types/BaseProps';
// import CentralServerProvider from '../../provider/CentralServerProvider';
// import UserToken from '../../types/UserToken';
// import ProviderFactory from '../../provider/ProviderFactory';
//
// // Define types for wallet balance and transactions
// interface Transaction {
//   id: string;
//   date: string;
//   amount: number;
//   type: 'Credit' | 'Debit';
//   description: string;
// }
//
// interface State {
//   walletBalance: number;
//   userToken?: UserToken;
//   id: string;
//   transactions: Transaction[];
//   loading: boolean;
//   activeTab: string;
//   showRechargeInput: boolean;
//   rechargeAmount: string;
//   calculatedGST: number | null;
//   adjustedAmount: number | null;
//   showFilters: boolean;
//   startDate: Date | null;
//   endDate: Date | null;
//   showStartDatePicker: boolean;
//   showEndDatePicker: boolean;
// }
//
// export interface Props extends BaseProps {
//   // Additional props specific to Wallet
// }
//
// class Wallet extends BaseAutoRefreshScreen<Props, State> {
//   private centralServerProvider: CentralServerProvider;
//
//   public constructor(props: Props) {
//     super(props);
//
//     this.state = {
//       walletBalance: 0,
//       userToken: null,
//       transactions: [],
//       id: null,
//       loading: true,
//       activeTab: 'Balance',
//       showRechargeInput: false,
//       rechargeAmount: '',
//       calculatedGST: null,
//       adjustedAmount: null,
//       showFilters: false,
//       startDate: null,
//       endDate: null,
//       showStartDatePicker: false,
//       showEndDatePicker: false,
//     };
//   }
//
//  public setState = (
//         state: State | ((prevState: Readonly<State>, props: Readonly<Props>) => State | Pick<State, never>) | Pick<State, never>,
//         callback?: () => void
//       ) => {
//         super.setState(state, callback);
//       };
//
//    public getUserInfo()  {
//         // Logoff
//         const userInfo = this.centralServerProvider.getUserInfo();
//         this.setState({
//           userToken: this.centralServerProvider.getUserInfo(),
//           id: userInfo.id,
//         });
//     console.log(this.state.id,  '----------------------------------------------------------------------------------------------'  );
//     };
//
//   fetchWalletData = async () => {
//     try {
//       this.setState({ loading: true });
//        const startDate= this.state.startDate ? this.state.startDate.toISOString() : undefined;
//       const endDate= this.state.endDate ? this.state.endDate.toISOString() : undefined;
//       const balanceResponse = await this.centralServerProvider.getWalletBalance(this.state.id);
//
//       const transactionsResponse = await this.centralServerProvider.getWalletTransaction(this.state.id,startDate,endDate);
//
//       this.setState({
//         walletBalance: balanceResponse.balance,
//         transactions: transactionsResponse,
//         loading: false,
//       });
//     } catch (error) {
//       console.error('Error fetching wallet data:', error);
//       this.setState({ loading: false });
//     }
//   };
//
//   public async componentDidMount() {
//     this.centralServerProvider = await ProviderFactory.getProvider();
//     await this.getUserInfo();
//     this.fetchWalletData();
//     this.autoRefreshId = setInterval(this.fetchWalletData, 60000);
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.autoRefreshId);
//   }
//
//   rechargeWallet = async  () => {
//     const { adjustedAmount } = this.state;
//
//     if (adjustedAmount === null) {
//       return;
//     }
//
//     console.log(`Recharging wallet with: ${adjustedAmount} ZF Coins (GST included)`);
//
//     try {
//       const sessionId = await this.centralServerProvider.rechargeWallet(this.state.id, adjustedAmount);
//       this.initiatePayment(sessionId);
//       this.setState({ showRechargeInput: false, rechargeAmount: '', calculatedGST: null, adjustedAmount: null });
//     } catch (error) {
//       console.error('Error initiating wallet recharge:', error);
//     }
//   };
//
//    initiatePayment = (sessionId: string) => {
//       const cashfree = new Cashfree({ mode: 'sandbox' });
//       cashfree
//         .checkout({
//           paymentSessionId: sessionId,
//           redirectTarget: '_self', // Use '_self' to open in the same tab
//         })
//         .then(() => {
//           console.log('Redirecting to payment gateway...');
//         })
//         .catch((error: any) => {
//           console.error('Error during payment initiation:', error);
//         });
//     };
//
//
//
//     onAmountChange = (amount: string) => {
//       this.setState({ rechargeAmount: amount });
//       const numericAmount = parseFloat(amount);
//
//       if (!isNaN(numericAmount)) {
//         const gst = numericAmount * 0.18;
//         const adjusted = numericAmount - gst;
//         this.setState({
//           calculatedGST: gst,
//           adjustedAmount: adjusted,
//         });
//       } else {
//         this.setState({ calculatedGST: null, adjustedAmount: null });
//       }
//     };
//
//   // Handle filter form submission
//   applyFilters = () => {
//     this.fetchWalletData();
//     this.setState({ showFilters: false });
//   };
//
//   resetFilters = () => {
//     this.setState({ startDate: null, endDate: null }, this.fetchWalletData);
//   };
//
//   // Handle date changes
//   onStartDateChange = (event: any, selectedDate: Date | undefined) => {
//     const currentDate = selectedDate || this.state.startDate;
//     this.setState({ startDate: currentDate, showStartDatePicker: false });
//   };
//
//   onEndDateChange = (event: any, selectedDate: Date | undefined) => {
//     const currentDate = selectedDate || this.state.endDate;
//     this.setState({ endDate: currentDate, showEndDatePicker: false });
//   };
//
// renderTransaction = ({ item }: { item: Transaction }) => {
//   const dateTime = new Date(item.timestamp).toLocaleString(); // Corrected declaration
//
//   return (
//     <View style={styles.transactionRow}>
//       <Text style={styles.transactionText}>{dateTime}</Text>
//       <Text style={styles.transactionText}>${item.amount.toFixed(2)}</Text>
//       <Text style={styles.transactionText}>{item.type}</Text>
//       <Text style={styles.transactionText}>{item.description}</Text>
//     </View>
//   );
// };
//
//   render() {
//     const {
//       loading,
//       walletBalance,
//       transactions,
//       activeTab,
//       showRechargeInput,
//       rechargeAmount,
//       calculatedGST,
//       adjustedAmount,
//       showFilters,
//       startDate,
//       endDate,
//       showStartDatePicker,
//       showEndDatePicker,
//     } = this.state;
//
//     const { canOpenDrawer, navigation } = this.props;
//
//     if (loading) {
//       return <ActivityIndicator size="large" style={styles.loader} />;
//     }
//
//  const htmlContent = `
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Payment</title>
//           <script src="https://sdk.cashfree.com/js/v3/cashfree.js"></script>
//       </head>
//       <body>
//           <script>
//               function initiatePayment(sessionId) {
//                   const cashfree = new Cashfree({ mode: 'sandbox' });
//                   cashfree.checkout({
//                       paymentSessionId: sessionId,
//                       redirectTarget: '_self' // Adjust as needed
//                   });
//               }
//
//               // Listen for a message from React Native to initiate payment
//               window.ReactNativeWebView && window.ReactNativeWebView.postMessage('ready');
//           </script>
//       </body>
//       </html>
//     `;
//
//     return (
//       <View style={styles.container}>
//         <HeaderComponent
//           sideBar={this.canOpenDrawer}
//           navigation={navigation}
//           title="Wallet"
//           subTitle={null}
//         />
//
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'Balance' && styles.activeTab]}
//             onPress={() => this.setState({ activeTab: 'Balance' })}>
//             <Text style={styles.tabButtonText}>Balance</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'Transactions' && styles.activeTab]}
//             onPress={() => this.setState({ activeTab: 'Transactions' })}>
//             <Text style={styles.tabButtonText}>Transactions</Text>
//           </TouchableOpacity>
//         </View>
//
//         {activeTab === 'Balance' ? (
//           <View>
//             <Card style={styles.balanceCard}>
//               <Title style={styles.title}>Wallet Balance: ${walletBalance}</Title>
//               <TouchableOpacity
//                 onPress={() => this.setState({ showRechargeInput: !showRechargeInput })}
//                 style={styles.rechargeButton}>
//                 <Text style={styles.rechargeButtonText}>
//                   {showRechargeInput ? 'Cancel Recharge' : 'Recharge Wallet'}
//                 </Text>
//               </TouchableOpacity>
//             </Card>
//              {showRechargeInput && (
//                           <Card style={styles.rechargeCard}>
//                             <Title style={styles.title}>Enter Recharge Amount</Title>
//                             <TextInput
//                               label="Recharge Amount"
//                               value={rechargeAmount}
//                               onChangeText={this.onAmountChange}
//                               keyboardType="numeric"
//                               style={styles.input}
//                             />
//                             {calculatedGST !== null && (
//                               <View style={styles.gstInfo}>
//                                 <Text>Amount after GST: ${adjustedAmount?.toFixed(2)} ZF Coins</Text>
//                                 <Text>GST (18%): ${calculatedGST?.toFixed(2)}</Text>
//                               </View>
//                             )}
//                             <Button
//                               mode="contained"
//                               onPress={this.rechargeWallet}
//                               disabled={!rechargeAmount || isNaN(Number(rechargeAmount))}>
//                               Recharge
//                             </Button>
//                           </Card>
//                         )}
//           </View>
//         ) : (
//           <Card style={styles.historyCard}>
//             <View style={styles.filterContainer}>
//               <Text style={styles.title}>Wallet Transaction History</Text>
//               <Button
//                 mode="outlined"
//                 onPress={() => this.setState({ showFilters: !showFilters })}>
//                 {showFilters ? 'Hide Filters' : 'Filters'}
//               </Button>
//               {showFilters && (
//                 <View style={styles.filterForm}>
//                   <TouchableOpacity onPress={() => this.setState({ showStartDatePicker: true })}>
//                    <Text style={styles.label}>Start Date</Text>
//                     <TextInput
//                       label='Start Date'
//                       value={startDate ? startDate.toLocaleDateString() : ''}
//                       editable={false}
//                       style={styles.input}
//                     />
//                   </TouchableOpacity>
//                   {showStartDatePicker && (
//                     <DateTimePicker
//                       value={startDate || new Date()}
//                       mode="date"
//                       display="default"
//                       onChange={this.onStartDateChange}
//                     />
//                   )}
//                   <TouchableOpacity onPress={() => this.setState({ showEndDatePicker: true })}>
//                   <Text style={styles.label}>End Date</Text>
//                     <TextInput
//                       label="End Date"
//                       value={endDate ? endDate.toLocaleDateString() : ''}
//                       editable={false}
//                       style={styles.input}
//                     />
//                   </TouchableOpacity>
//                   {showEndDatePicker && (
//                     <DateTimePicker
//                       value={endDate || new Date()}
//                       mode="date"
//                       display="default"
//                       onChange={this.onEndDateChange}
//                     />
//                   )}
//                   <View style={styles.innerButtonContainer}>
//                       <Button onPress={this.applyFilters}>Apply</Button>
//                       <Button onPress={this.resetFilters}>Reset</Button>
//                     </View>
//                 </View>
//               )}
//             </View>
//
//             <View style={styles.transactionTable}>
//               <View style={styles.transactionHeader}>
//                 <Text style={styles.transactionHeaderText}>Date</Text>
//                 <Text style={styles.transactionHeaderText}>Amount</Text>
//                 <Text style={styles.transactionHeaderText}>Type</Text>
//                 <Text style={styles.transactionHeaderText}>Description</Text>
//               </View>
//               <FlatList
//                 data={transactions}
//                 renderItem={this.renderTransaction}
//                 keyExtractor={(item) => item.id}
//               />
//             </View>
//           </Card>
//         )}
//
//         <Modal
//                   visible={isPaymentModalVisible}
//                   onRequestClose={() => this.setState({ isPaymentModalVisible: false })}
//                   animationType="slide">
//                   <WebView
//                     source={{ html: htmlContent }}
//                     style={{ flex: 1 }}
//                     onLoadEnd={() => {
//                       if (sessionId) {
//                         this.initiatePayment(sessionId);
//                       }
//                     }}
//                   />
//                 </Modal>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   tabButton: {
//     padding: 10,
//     backgroundColor: '#e0e0e0',
//     borderRadius: 5,
//   },
//   activeTab: {
//     backgroundColor: '#007bff',
//   },
//   tabButtonText: {
//     fontWeight: 'bold',
//   },
//   balanceCard: {
//     padding: 20,
//   },
//    label: {
//       fontSize: 16,
//       marginBottom: 4,
//       color: '#333',
//     },
//   rechargeButton: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   rechargeButtonText: {
//     color: '#fff',
//   },
//   rechargeCard: {
//     marginTop: 20,
//     padding: 15,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   loader: {
//     marginTop: 20,
//   },
//   filterContainer: {
//     marginBottom: 10,
//   },
//   filterForm: {
//     flexDirection: 'row',
//     marginVertical: 10,
//     justifyContent: "space-around"
//   },
//  innerButtonContainer: {
//     marginTop: 20, // Add margin to create space above the buttons
//     flexDirection: 'row', // This keeps buttons in a row
//     justifyContent: 'space-between', // Space them out evenly
//   },
//   input: {
// //     marginVertical: 5,
//        height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         paddingHorizontal: 10,
//   },
//   transactionTable: {
//     marginTop: 10,
//   },
//   transactionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     backgroundColor: '#e0e0e0',
//   },
//   transactionHeaderText: {
//     fontWeight: 'bold',
//     flex: 1,
//     textAlign: 'center',
//   },
//   transactionRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   transactionText: {
//     flex: 1,
//     textAlign: 'center',
//   },
//   gstInfo: {
//     marginTop: 10,
//   },
// });
//
// export default Wallet;
//
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
//   Platform,
//   Modal,
// } from 'react-native';
// import { Card, Title, ActivityIndicator, Button } from 'react-native-paper';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import axios from 'axios';
// import HeaderComponent from '../../components/header/HeaderComponent';
// import BaseAutoRefreshScreen from '../base-screen/BaseAutoRefreshScreen';
// import BaseProps from '../../types/BaseProps';
// import CentralServerProvider from '../../provider/CentralServerProvider';
// import UserToken from '../../types/UserToken';
// import ProviderFactory from '../../provider/ProviderFactory';
// import { WebView } from 'react-native-webview';
// import {
//   CFErrorResponse,
//   CFPaymentGatewayService,
// } from 'react-native-cashfree-pg-api';
//
// // Define types for wallet balance and transactions
// interface Transaction {
//   id: string;
//   date: string;
//   amount: number;
//   type: 'Credit' | 'Debit';
//   description: string;
// }
//
// interface State {
//   walletBalance: number;
//   userToken?: UserToken;
//   id: string;
//   transactions: Transaction[];
//   loading: boolean;
//   activeTab: string;
//   showRechargeInput: boolean;
//   rechargeAmount: string;
//   calculatedGST: number | null;
//   adjustedAmount: number | null;
//   showFilters: boolean;
//   startDate: Date | null;
//   endDate: Date | null;
//   showStartDatePicker: boolean;
//   showEndDatePicker: boolean;
//   isPaymentModalVisible: boolean;
//   sessionId: string;
// }
//
// export interface Props extends BaseProps {
//   // Additional props specific to Wallet
// }
//
// class Wallet extends BaseAutoRefreshScreen<Props, State> {
//   private centralServerProvider: CentralServerProvider;
//
//   public constructor(props: Props) {
//     super(props);
//
//     this.state = {
//       walletBalance: 0,
//       userToken: null,
//       transactions: [],
//       id: null,
//       loading: true,
//       activeTab: 'Balance',
//       showRechargeInput: false,
//       rechargeAmount: '',
//       calculatedGST: null,
//       adjustedAmount: null,
//       showFilters: false,
//       startDate: null,
//       endDate: null,
//       showStartDatePicker: false,
//       showEndDatePicker: false,
//       isPaymentModalVisible: false,
//       sessionId: '',
//     };
//   }
//
//   public setState = (
//     state: State | ((prevState: Readonly<State>, props: Readonly<Props>) => State | Pick<State, never>) | Pick<State, never>,
//     callback?: () => void
//   ) => {
//     super.setState(state, callback);
//   };
//
//   public getUserInfo() {
//     const userInfo = this.centralServerProvider.getUserInfo();
//     this.setState({
//       userToken: this.centralServerProvider.getUserInfo(),
//       id: userInfo.id,
//     });
//     console.log(this.state.id, '----------------------------------------------------------------------------------------------');
//   }
//
//   fetchWalletData = async () => {
//     try {
//       this.setState({ loading: true });
//       const startDate = this.state.startDate ? this.state.startDate.toISOString() : undefined;
//       const endDate = this.state.endDate ? this.state.endDate.toISOString() : undefined;
//       const balanceResponse = await this.centralServerProvider.getWalletBalance(this.state.id);
//
//       const transactionsResponse = await this.centralServerProvider.getWalletTransaction(this.state.id, startDate, endDate);
//
//       this.setState({
//         walletBalance: balanceResponse.balance,
//         transactions: transactionsResponse,
//         loading: false,
//       });
//     } catch (error) {
//       console.error('Error fetching wallet data:', error);
//       this.setState({ loading: false });
//     }
//   };
//
//   public async componentDidMount() {
//     this.centralServerProvider = await ProviderFactory.getProvider();
//     await this.getUserInfo();
//     this.fetchWalletData();
//     this.autoRefreshId = setInterval(this.fetchWalletData, 60000);
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.autoRefreshId);
//   }
//
//   rechargeWallet = async () => {
//     const { adjustedAmount } = this.state;
//
//     if (adjustedAmount === null) {
//       return;
//     }
//
//     console.log(`Recharging wallet with: ${adjustedAmount} ZF Coins (GST included)`);
//
//     try {
//       const sessionIds = await this.centralServerProvider.rechargeWallet(this.state.id, adjustedAmount);
// //        CFPaymentGatewayService.doUPIPayment({sessionId});
// console.log(sessionIds, ' ayush ');
// //       this.setState({ sessionId: sessionIds.payment_session_id, isPaymentModalVisible: true });
// this.setState((prevState) => ({ ...prevState, sessionId: sessionIds.payment_session_id, isPaymentModalVisible: true }));
//     } catch (error) {
//       console.error('Error initiating wallet recharge:', error);
//     }
//   };
//
//   initiatePayment = (sessionId: string) => {
//     this.setState({ isPaymentModalVisible: true });
//   };
//
//   onAmountChange = (amount: string) => {
//     this.setState({ rechargeAmount: amount });
//     const numericAmount = parseFloat(amount);
//
//     if (!isNaN(numericAmount)) {
//       const gst = numericAmount * 0.18;
//       const adjusted = numericAmount - gst;
//       this.setState({
//         calculatedGST: gst,
//         adjustedAmount: adjusted,
//       });
//     } else {
//       this.setState({ calculatedGST: null, adjustedAmount: null });
//     }
//   };
//
//   // Handle filter form submission
//   applyFilters = () => {
//     this.fetchWalletData();
//     this.setState({ showFilters: false });
//   };
//
//   resetFilters = () => {
//     this.setState({ startDate: null, endDate: null }, this.fetchWalletData);
//   };
//
//   // Handle date changes
//   onStartDateChange = (event: any, selectedDate: Date | undefined) => {
//     const currentDate = selectedDate || this.state.startDate;
//     this.setState({ startDate: currentDate, showStartDatePicker: false });
//   };
//
//   onEndDateChange = (event: any, selectedDate: Date | undefined) => {
//     const currentDate = selectedDate || this.state.endDate;
//     this.setState({ endDate: currentDate, showEndDatePicker: false });
//   };
//
//   renderTransaction = ({ item }: { item: Transaction }) => {
//     const dateTime = new Date(item.timestamp).toLocaleString();
//
//     return (
//       <View style={styles.transactionRow}>
//         <Text style={styles.transactionText}>{dateTime}</Text>
//         <Text style={styles.transactionText}>${item.amount.toFixed(2)}</Text>
//         <Text style={styles.transactionText}>{item.type}</Text>
//         <Text style={styles.transactionText}>{item.description}</Text>
//       </View>
//     );
//   };
//
//   render() {
//     const {
//       loading,
//       walletBalance,
//       transactions,
//       activeTab,
//       showRechargeInput,
//       rechargeAmount,
//       calculatedGST,
//       adjustedAmount,
//       showFilters,
//       startDate,
//       endDate,
//       showStartDatePicker,
//       showEndDatePicker,
//       isPaymentModalVisible,
//       sessionId,
//     } = this.state;
//
//     const { canOpenDrawer, navigation } = this.props;
//
//     if (loading) {
//       return <ActivityIndicator size="large" style={styles.loader} />;
//     }
//
//     const htmlContent = `
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Payment</title>
//           <script src="https://sdk.cashfree.com/js/v3/cashfree.js"></script>
//       </head>
//       <body>
//           <script>
//               function initiatePayment(sessionId) {
//                   const cashfree = new Cashfree({ mode: 'sandbox' });
//                   cashfree.checkout({
//                       paymentSessionId: sessionId,
//                       redirectTarget: '_self'
//                   });
//               }
//
//               window.onload = function() {
//                   initiatePayment("${sessionId}");
//               };
//           </script>
//       </body>
//       </html>
//     `;
//
//     return (
//       <View style={styles.container}>
//         <HeaderComponent
//           sideBar={this.canOpenDrawer}
//           navigation={navigation}
//           title="Wallet"
//           subTitle={null}
//         />
//
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'Balance' && styles.activeTab]}
//             onPress={() => this.setState({ activeTab: 'Balance' })}>
//             <Text style={styles.tabButtonText}>Balance</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'Transactions' && styles.activeTab]}
//             onPress={() => this.setState({ activeTab: 'Transactions' })}>
//             <Text style={styles.tabButtonText}>Transactions</Text>
//           </TouchableOpacity>
//         </View>
//
//         {activeTab === 'Balance' ? (
//           <View>
//             <Card style={styles.balanceCard}>
//               <Title style={styles.title}>Wallet Balance: ${walletBalance}</Title>
//               <TouchableOpacity
//                 onPress={() => this.setState({ showRechargeInput: !showRechargeInput })}
//                 style={styles.rechargeButton}>
//                 <Text style={styles.rechargeButtonText}>
//                   {showRechargeInput ? 'Cancel Recharge' : 'Recharge Wallet'}
//                 </Text>
//               </TouchableOpacity>
//             </Card>
//             {showRechargeInput && (
//               <Card style={styles.rechargeCard}>
//                 <Title style={styles.title}>Enter Recharge Amount</Title>
//                 <TextInput
//                   label="Recharge Amount"
//                   value={rechargeAmount}
//                   onChangeText={this.onAmountChange}
//                   keyboardType="numeric"
//                   style={styles.input}
//                 />
//                 {calculatedGST !== null && (
//                   <View style={styles.gstInfo}>
//                     <Text>Amount after GST: ${adjustedAmount?.toFixed(2)} ZF Coins</Text>
//                     <Text>GST (18%): ${calculatedGST?.toFixed(2)}</Text>
//                   </View>
//                 )}
//                 <Button
//                   mode="contained"
//                   onPress={this.rechargeWallet}
//                   disabled={!rechargeAmount || isNaN(Number(rechargeAmount))}>
//                   Recharge
//                 </Button>
//               </Card>
//             )}
//           </View>
//         ) : (
//           <Card style={styles.historyCard}>
//             <View style={styles.filterContainer}>
//               <Text style={styles.title}>Wallet Transaction History</Text>
//               <Button
//                 mode="outlined"
// //                 style={{styles.tabButton}}
//                 onPress={() => this.setState({ showFilters: !showFilters })}>
//                 {showFilters ? 'Hide Filters' : 'Filters'}
//               </Button>
//               {showFilters && (
//                 <View style={styles.filterForm}>
//                   <TouchableOpacity onPress={() => this.setState({ showStartDatePicker: true })}>
//                     <Text style={styles.label}>Start Date</Text>
//                     <TextInput
//                       label='Start Date'
//                       value={startDate ? startDate.toLocaleDateString() : ''}
//                       editable={false}
//                       style={styles.input}
//                     />
//                   </TouchableOpacity>
//                   {showStartDatePicker && (
//                     <DateTimePicker
//                       value={startDate || new Date()}
//                       mode="date"
//                       display="default"
//                       onChange={this.onStartDateChange}
//                     />
//                   )}
//                   <TouchableOpacity onPress={() => this.setState({ showEndDatePicker: true })}>
//                     <Text style={styles.label}>End Date</Text>
//                     <TextInput
//                       label="End Date"
//                       value={endDate ? endDate.toLocaleDateString() : ''}
//                       editable={false}
//                       style={styles.input}
//                     />
//                   </TouchableOpacity>
//                   {showEndDatePicker && (
//                     <DateTimePicker
//                       value={endDate || new Date()}
//                       mode="date"
//                       display="default"
//                       onChange={this.onEndDateChange}
//                     />
//                   )}
//                   <View style={styles.innerButtonContainer}>
//                     <Button onPress={this.applyFilters}>Apply</Button>
//                     <Button onPress={this.resetFilters}>Reset</Button>
//                   </View>
//                 </View>
//               )}
//             </View>
//
//             <View style={styles.transactionTable}>
//               <View style={styles.transactionHeader}>
//                 <Text style={styles.transactionHeaderText}>Date</Text>
//                 <Text style={styles.transactionHeaderText}>Amount</Text>
//                 <Text style={styles.transactionHeaderText}>Type</Text>
//                 <Text style={styles.transactionHeaderText}>Description</Text>
//               </View>
//               <FlatList
//                 data={transactions}
//                 renderItem={this.renderTransaction}
//                 keyExtractor={(item) => item.id}
//               />
//             </View>
//           </Card>
//         )}
//
//         <Modal
//           visible={isPaymentModalVisible}
//           onRequestClose={() => this.setState({ isPaymentModalVisible: false })}
//           animationType="slide">
//           <WebView
//             source={{ html: htmlContent }}
//             style={{ flex: 1 }}
//             onLoadEnd={() => {
//               if (sessionId) {
//                 this.initiatePayment(sessionId);
//               }
//             }}
//           />
//         </Modal>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   tabButton: {
//     padding: 10,
//     backgroundColor: '#e0e0e0',
//     borderRadius: 5,
//   },
//   activeTab: {
//     backgroundColor: '#007bff',
//   },
//   tabButtonText: {
//     fontWeight: 'bold',
//   },
//   balanceCard: {
//     padding: 20,
//   },
//    label: {
//       fontSize: 16,
//       marginBottom: 4,
//       color: '#333',
//     },
//   rechargeButton: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   rechargeButtonText: {
//     color: '#fff',
//   },
//   rechargeCard: {
//     marginTop: 20,
//     padding: 15,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   loader: {
//     marginTop: 20,
//   },
//   filterContainer: {
//     marginBottom: 10,
//   },
//   filterForm: {
//     flexDirection: 'row',
//     marginVertical: 10,
//     justifyContent: "space-around"
//   },
//  innerButtonContainer: {
//     marginTop: 20, // Add margin to create space above the buttons
//     flexDirection: 'row', // This keeps buttons in a row
//     justifyContent: 'space-between', // Space them out evenly
//   },
//   input: {
// //     marginVertical: 5,
//        height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         paddingHorizontal: 10,
//   },
//   transactionTable: {
//     marginTop: 10,
//   },
//   transactionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     backgroundColor: '#e0e0e0',
//   },
//   transactionHeaderText: {
//     fontWeight: 'bold',
//     flex: 1,
//     textAlign: 'center',
//   },
//   transactionRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   transactionText: {
//     flex: 1,
//     textAlign: 'center',
//   },
//   gstInfo: {
//     marginTop: 10,
//   },
// });
//
// export default Wallet;


//
// import React, { useState, useEffect, useCallback } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
//   Modal,
// } from 'react-native';
// import { Card, Title, ActivityIndicator, Button } from 'react-native-paper';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { WebView } from 'react-native-webview';
// import HeaderComponent from '../../components/header/HeaderComponent';
// import CentralServerProvider from '../../provider/CentralServerProvider';
// import ProviderFactory from '../../provider/ProviderFactory';
// import { Transaction, WalletProps, WalletState } from './types'; // Import types from a separate file for cleanliness
//
// const Wallet: React.FC<WalletProps> = ({ navigation, canOpenDrawer }) => {
//   const [state, setState] = useState<WalletState>({
//     walletBalance: 0,
//     userToken: undefined,
//     transactions: [],
//     loading: true,
//     activeTab: 'Balance',
//     showRechargeInput: false,
//     rechargeAmount: '',
//     calculatedGST: null,
//     adjustedAmount: null,
//     showFilters: false,
//     startDate: null,
//     endDate: null,
//     showStartDatePicker: false,
//     showEndDatePicker: false,
//     isPaymentModalVisible: false,
//     sessionId: '',
//   });
//
//   const { walletBalance, transactions, loading, activeTab, showRechargeInput, rechargeAmount, calculatedGST, adjustedAmount, showFilters, startDate, endDate, showStartDatePicker, showEndDatePicker, isPaymentModalVisible, sessionId } = state;
//
//   let centralServerProvider: CentralServerProvider;
//
//   const fetchUserInfo = useCallback(async () => {
//     try {
//       centralServerProvider = await ProviderFactory.getProvider();
//       const userInfo = centralServerProvider.getUserInfo();
//       setState((prevState) => ({
//         ...prevState,
//         userToken: userInfo,
//         id: userInfo.id,
//       }));
//     } catch (error) {
//       console.error('Error fetching user info:', error);
//     }
//   }, []);
//
//   const fetchWalletData = useCallback(async () => {
//     try {
//       setState((prevState) => ({ ...prevState, loading: true }));
//       const { id, startDate, endDate } = state;
//       const startDateString = startDate ? startDate.toISOString() : undefined;
//       const endDateString = endDate ? endDate.toISOString() : undefined;
//
//       const [balanceResponse, transactionsResponse] = await Promise.all([
//         centralServerProvider.getWalletBalance(id),
//         centralServerProvider.getWalletTransaction(id, startDateString, endDateString),
//       ]);
//
//       setState((prevState) => ({
//         ...prevState,
//         walletBalance: balanceResponse.balance,
//         transactions: transactionsResponse,
//         loading: false,
//       }));
//     } catch (error) {
//       console.error('Error fetching wallet data:', error);
//       setState((prevState) => ({ ...prevState, loading: false }));
//     }
//   }, [state.id, state.startDate, state.endDate]);
//
//   useEffect(() => {
//     fetchUserInfo();
//     fetchWalletData();
//     const autoRefresh = setInterval(fetchWalletData, 60000);
//     return () => clearInterval(autoRefresh);
//   }, [fetchUserInfo, fetchWalletData]);
//
//   const rechargeWallet = async () => {
//     if (adjustedAmount === null) return;
//
//     try {
//       const sessionIds = await centralServerProvider.rechargeWallet(state.id, adjustedAmount);
//       setState((prevState) => ({ ...prevState, sessionId: sessionIds.payment_session_id, isPaymentModalVisible: true }));
//     } catch (error) {
//       console.error('Error initiating wallet recharge:', error);
//     }
//   };
//
//   const onAmountChange = (amount: string) => {
//     const numericAmount = parseFloat(amount);
//     if (!isNaN(numericAmount)) {
//       const gst = numericAmount * 0.18;
//       const adjusted = numericAmount - gst;
//       setState((prevState) => ({
//         ...prevState,
//         rechargeAmount: amount,
//         calculatedGST: gst,
//         adjustedAmount: adjusted,
//       }));
//     } else {
//       setState((prevState) => ({
//         ...prevState,
//         rechargeAmount: amount,
//         calculatedGST: null,
//         adjustedAmount: null,
//       }));
//     }
//   };
//
//   const onStartDateChange = (event: any, selectedDate: Date | undefined) => {
//     const currentDate = selectedDate || state.startDate;
//     setState((prevState) => ({ ...prevState, startDate: currentDate, showStartDatePicker: false }));
//   };
//
//   const onEndDateChange = (event: any, selectedDate: Date | undefined) => {
//     const currentDate = selectedDate || state.endDate;
//     setState((prevState) => ({ ...prevState, endDate: currentDate, showEndDatePicker: false }));
//   };
//
//   const renderTransaction = ({ item }: { item: Transaction }) => (
//     <View style={styles.transactionRow}>
//       <Text style={styles.transactionText}>{new Date(item.date).toLocaleString()}</Text>
//       <Text style={styles.transactionText}>${item.amount.toFixed(2)}</Text>
//       <Text style={styles.transactionText}>{item.type}</Text>
//       <Text style={styles.transactionText}>{item.description}</Text>
//     </View>
//   );
//
//   if (loading) {
//     return <ActivityIndicator size="large" style={styles.loader} />;
//   }
//
//   const htmlContent = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Payment</title>
//         <script src="https://sdk.cashfree.com/js/v3/cashfree.js"></script>
//     </head>
//     <body>
//         <script>
//             function initiatePayment(sessionId) {
//                 const cashfree = new Cashfree({ mode: 'sandbox' });
//                 cashfree.checkout({
//                     paymentSessionId: sessionId,
//                     redirectTarget: '_self'
//                 });
//             }
//             window.onload = function() {
//                 initiatePayment("${sessionId}");
//             };
//         </script>
//     </body>
//     </html>
//   `;
//
//   return (
//     <View style={styles.container}>
//       <HeaderComponent
//         sideBar={canOpenDrawer}
//         navigation={navigation}
//         title="Wallet"
//         subTitle={null}
//       />
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[styles.tabButton, activeTab === 'Balance' && styles.activeTab]}
//           onPress={() => setState((prevState) => ({ ...prevState, activeTab: 'Balance' }))}>
//           <Text style={styles.tabButtonText}>Balance</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.tabButton, activeTab === 'Transactions' && styles.activeTab]}
//           onPress={() => setState((prevState) => ({ ...prevState, activeTab: 'Transactions' }))}>
//           <Text style={styles.tabButtonText}>Transactions</Text>
//         </TouchableOpacity>
//       </View>
//       {activeTab === 'Balance' ? (
//         <View>
//           <Card style={styles.balanceCard}>
//             <Title style={styles.title}>Wallet Balance: ${walletBalance}</Title>
//             <TouchableOpacity
//               onPress={() => setState((prevState) => ({ ...prevState, showRechargeInput: !showRechargeInput }))}
//               style={styles.rechargeButton}>
//               <Text style={styles.rechargeButtonText}>
//                 {showRechargeInput ? 'Cancel Recharge' : 'Recharge Wallet'}
//               </Text>
//             </TouchableOpacity>
//           </Card>
//           {showRechargeInput && (
//             <Card style={styles.rechargeCard}>
//               <Title style={styles.title}>Enter Recharge Amount</Title>
//               <TextInput
//                 value={rechargeAmount}
//                 onChangeText={onAmountChange}
//                 keyboardType="numeric"
//                 style={styles.input}
//               />
//               {calculatedGST !== null && (
//                 <View style={styles.gstInfo}>
//                   <Text>Amount after GST: ${adjustedAmount?.toFixed(2)} ZF Coins</Text>
//                   <Text>GST (18%): ${calculatedGST.toFixed(2)}</Text>
//                 </View>
//               )}
//               <Button onPress={rechargeWallet} disabled={!adjustedAmount} mode="contained">
//                 Pay Now
//               </Button>
//             </Card>
//           )}
//         </View>
//       ) : (
//         <View>
//           <View style={styles.filtersContainer}>
//             <Button
//               onPress={() => setState((prevState) => ({ ...prevState, showFilters: !showFilters }))}
//               mode="outlined">
//               {showFilters ? 'Hide Filters' : 'Show Filters'}
//             </Button>
//           </View>
//           {showFilters && (
//             <View style={styles.filters}>
//               <TouchableOpacity onPress={() => setState((prevState) => ({ ...prevState, showStartDatePicker: true }))}>
//                 <Text style={styles.dateFilter}>Start Date: {startDate?.toLocaleDateString() || 'Select Date'}</Text>
//               </TouchableOpacity>
//               {showStartDatePicker && (
//                 <DateTimePicker value={startDate || new Date()} onChange={onStartDateChange} mode="date" />
//               )}
//               <TouchableOpacity onPress={() => setState((prevState) => ({ ...prevState, showEndDatePicker: true }))}>
//                 <Text style={styles.dateFilter}>End Date: {endDate?.toLocaleDateString() || 'Select Date'}</Text>
//               </TouchableOpacity>
//               {showEndDatePicker && (
//                 <DateTimePicker value={endDate || new Date()} onChange={onEndDateChange} mode="date" />
//               )}
//               <Button onPress={fetchWalletData} mode="contained">Apply Filters</Button>
//             </View>
//           )}
//           <FlatList
//             data={transactions}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={renderTransaction}
//           />
//         </View>
//       )}
//       <Modal
//         visible={isPaymentModalVisible}
//         onRequestClose={() => setState((prevState) => ({ ...prevState, isPaymentModalVisible: false }))}>
//         <WebView
//           source={{ html: htmlContent }}
//           onNavigationStateChange={(event) => {
//             if (event.url.includes('status=success')) {
//               setState((prevState) => ({
//                 ...prevState,
//                 isPaymentModalVisible: false,
//               }));
//               fetchWalletData(); // Refresh wallet data after successful payment
//             }
//           }}
//         />
//       </Modal>
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f0f0f0' },
//   buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10 },
//   tabButton: { paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#ffffff', borderRadius: 10 },
//   activeTab: { backgroundColor: '#007bff' },
//   tabButtonText: { color: '#007bff' },
//   balanceCard: { margin: 10, padding: 20, backgroundColor: '#ffffff' },
//   title: { fontSize: 20, marginBottom: 10 },
//   rechargeButton: { marginTop: 20 },
//   rechargeButtonText: { color: '#007bff' },
//   rechargeCard: { margin: 10, padding: 20, backgroundColor: '#ffffff' },
//   input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 10 },
//   gstInfo: { marginTop: 10 },
//   filtersContainer: { paddingHorizontal: 10, paddingVertical: 5 },
//   filters: { marginHorizontal: 10, backgroundColor: '#ffffff', borderRadius: 5, padding: 10 },
//   dateFilter: { marginVertical: 5, fontSize: 16 },
//   transactionRow: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
//   transactionText: { fontSize: 16 },
//   loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// });
//
// export default Wallet;




import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
  Modal,
} from 'react-native';
import { Card, Title, ActivityIndicator, Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import HeaderComponent from '../../components/header/HeaderComponent';
import BaseAutoRefreshScreen from '../base-screen/BaseAutoRefreshScreen';
import BaseProps from '../../types/BaseProps';
import CentralServerProvider from '../../provider/CentralServerProvider';
import UserToken from '../../types/UserToken';
import ProviderFactory from '../../provider/ProviderFactory';
import { WebView } from 'react-native-webview';
import {
  CFErrorResponse,
  CFPaymentGatewayService,
} from 'react-native-cashfree-pg-sdk';

import {
  CFDropCheckoutPayment,
  CFEnvironment,
  CFPaymentComponentBuilder,
  CFUPIIntentCheckoutPayment,
  CFPaymentModes,
  CFSession,
  CFThemeBuilder,
} from 'cashfree-pg-api-contract';


// import {
//   CFErrorResponse,
//   CFPaymentGatewayService,
// } from 'react-native-cashfree-pg-sdk';

// Define types for wallet balance and transactions
interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: 'Credit' | 'Debit';
  description: string;
}

interface State {
  walletBalance: number;
  userToken?: UserToken;
  id: string;
  transactions: Transaction[];
  loading: boolean;
  activeTab: string;
  showRechargeInput: boolean;
  rechargeAmount: string;
  calculatedGST: number | null;
  adjustedAmount: number | null;
  showFilters: boolean;
  startDate: Date | null;
  endDate: Date | null;
  showStartDatePicker: boolean;
  showEndDatePicker: boolean;
  isPaymentModalVisible: boolean;
  sessionId: string;
}

export interface Props extends BaseProps {
  // Additional props specific to Wallet
}

class Wallet extends BaseAutoRefreshScreen<Props, State> {
  private centralServerProvider: CentralServerProvider;

  public constructor(props: Props) {
      super();
      this.check = this.check.bind(this);
    super(props);

    this.state = {
      walletBalance: 0,
      userToken: null,
      transactions: [],
      id: null,
      loading: true,
      activeTab: 'Balance',
      showRechargeInput: false,
      rechargeAmount: '',
      calculatedGST: null,
      adjustedAmount: null,
      showFilters: false,
      startDate: null,
      endDate: null,
      showStartDatePicker: false,
      showEndDatePicker: false,
      isPaymentModalVisible: false,
      sessionId: '',
    };
  }

  public setState = (
    state: State | ((prevState: Readonly<State>, props: Readonly<Props>) => State | Pick<State, never>) | Pick<State, never>,
    callback?: () => void
  ) => {
    super.setState(state, callback);
  };

  public getUserInfo() {
    const userInfo = this.centralServerProvider.getUserInfo();
    this.setState({
      userToken: this.centralServerProvider.getUserInfo(),
      id: userInfo.id,
    });
    console.log(this.state.id, '----------------------------------------------------------------------------------------------');
  }


  fetchWalletData = async () => {
    try {
      this.setState({ loading: true });
      const startDate = this.state.startDate ? this.state.startDate.toISOString() : undefined;
      const endDate = this.state.endDate ? this.state.endDate.toISOString() : undefined;
      const balanceResponse = await this.centralServerProvider.getWalletBalance(this.state.id);

      const transactionsResponse = await this.centralServerProvider.getWalletTransaction(this.state.id, startDate, endDate);

      const reversedTransactions = transactionsResponse.reverse();

      this.setState({
        walletBalance: balanceResponse.balance,
        transactions: reversedTransactions,
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching wallet data:', error);
      this.setState({ loading: false });
    }
  };

  check = async (orderId : string) => {
       await this.centralServerProvider.checkTransactionStatus(orderId, this.state.id);
      }

  public async componentDidMount() {
    this.centralServerProvider = await ProviderFactory.getProvider();
    await this.getUserInfo();
    this.fetchWalletData();
    CFPaymentGatewayService.setCallback({
          onVerify: (orderID: string): void => {
            this.check(orderID);
            console.log('orderId is :' + orderID);
          },
          onError: (error: CFErrorResponse, orderID: string): void => {
            console.log('exception is : ' + JSON.stringify(error) + '\n orderId is :' + orderID);
          },
        });
  }

 componentWillUnmount() {
    console.log('UNMOUNTED');
    CFPaymentGatewayService.removeCallback();
  }

// Inside your class


rechargeWallet = async () => {
  const { adjustedAmount } = this.state;

  if (adjustedAmount === null) {
    return;
  }

  console.log(`Recharging wallet with: ${adjustedAmount} ZF Coins (GST included)`);

  try {
    // Step 1: Fetch session ID from your backend
    const sessionId = await this.centralServerProvider.rechargeWallet(this.state.id, adjustedAmount);



    sessionId.order_meta.payment_methods =  CFPaymentModes.UPI;


   const paymentModes = new CFPaymentComponentBuilder()
              .add(CFPaymentModes.CARD)
              .add(CFPaymentModes.UPI)
              .add(CFPaymentModes.NB)
              .add(CFPaymentModes.WALLET)
              .add(CFPaymentModes.PAY_LATER)
              .build();

 const session = new CFSession(
      sessionId.payment_session_id,
      sessionId.order_id,
      CFEnvironment.SANDBOX
      );


            const theme = new CFThemeBuilder()
              .setNavigationBarBackgroundColor('#E64A19')
              .setNavigationBarTextColor('#FFFFFF')
              .setButtonBackgroundColor('#FFC107')
              .setButtonTextColor('#FFFFFF')
              .setPrimaryTextColor('#212121')
              .setSecondaryTextColor('#757575')
              .build();

const upiPayment = new CFDropCheckoutPayment(
    session,
    paymentModes,
    theme
    )

    // Step 4: Initiate payment
    const paymentResponse = await CFPaymentGatewayService.doPayment(upiPayment);

    console.log('Payment Response:--------------------------------------------', upiPayment, paymentResponse, session);


  } catch (error) {
    console.error('Error initiating wallet recharge:', error);
//     Alert.alert('Error', 'An error occurred while processing your payment.');
  }
};



  initiatePayment = (sessionId: string) => {
    this.setState({ isPaymentModalVisible: true });
  };

  onAmountChange = (amount: string) => {
    this.setState({ rechargeAmount: amount });
    const numericAmount = parseFloat(amount);

    if (!isNaN(numericAmount)) {
      const gst = numericAmount * 0.18;
      const adjusted = numericAmount - gst;
      this.setState({
        calculatedGST: gst,
        adjustedAmount: adjusted,
      });
    } else {
      this.setState({ calculatedGST: null, adjustedAmount: null });
    }
  };

  // Handle filter form submission
  applyFilters = () => {
    this.fetchWalletData();
    this.setState({ showFilters: false });
  };

  resetFilters = () => {
    this.setState({ startDate: null, endDate: null }, this.fetchWalletData);
  };

  // Handle date changes
  onStartDateChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || this.state.startDate;
    this.setState({ startDate: currentDate, showStartDatePicker: false });
  };

  onEndDateChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || this.state.endDate;
    this.setState({ endDate: currentDate, showEndDatePicker: false });
  };

  renderTransaction = ({ item }: { item: Transaction }) => {
    const dateTime = new Date(item.timestamp).toLocaleString();

    return (
      <View style={styles.transactionRow}>
        <Text style={styles.transactionText}>{dateTime}</Text>
        <Text style={styles.transactionText}>${item.amount.toFixed(2)}</Text>
        <Text style={styles.transactionText}>{item.type}</Text>
        <Text style={styles.transactionText}>{item.description}</Text>
      </View>
    );
  };

  render() {
    const {
      loading,
      walletBalance,
      transactions,
      activeTab,
      showRechargeInput,
      rechargeAmount,
      calculatedGST,
      adjustedAmount,
      showFilters,
      startDate,
      endDate,
      showStartDatePicker,
      showEndDatePicker,
      isPaymentModalVisible,
      sessionId,
    } = this.state;

    const { canOpenDrawer, navigation } = this.props;

    if (loading) {
      return <ActivityIndicator size="large" style={styles.loader} />;
    }
    return (
      <View style={styles.container}>
        <HeaderComponent
          sideBar={this.canOpenDrawer}
          navigation={navigation}
          title="Wallet"
          subTitle={null}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'Balance' && styles.activeTab]}
            onPress={() => this.setState({ activeTab: 'Balance' })}>
            <Text style={styles.tabButtonText}>Balance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'Transactions' && styles.activeTab]}
            onPress={() => this.setState({ activeTab: 'Transactions' })}>
            <Text style={styles.tabButtonText}>Transactions</Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'Balance' ? (
          <View>
            <Card style={styles.balanceCard}>
              <Title style={styles.title}>Wallet Balance: ${walletBalance}</Title>
              <TouchableOpacity
                onPress={() => this.setState({ showRechargeInput: !showRechargeInput })}
                style={styles.rechargeButton}>
                <Text style={styles.rechargeButtonText}>
                  {showRechargeInput ? 'Cancel Recharge' : 'Recharge Wallet'}
                </Text>
              </TouchableOpacity>
            </Card>
            {showRechargeInput && (
              <Card style={styles.rechargeCard}>
                <Title style={styles.title}>Enter Recharge Amount</Title>
                <TextInput
                  label="Recharge Amount"
                  value={rechargeAmount}
                  onChangeText={this.onAmountChange}
                  keyboardType="numeric"
                  style={styles.input}
                />
                {calculatedGST !== null && (
                  <View style={styles.gstInfo}>
                    <Text>Amount after GST: ${adjustedAmount?.toFixed(2)} ZF Coins</Text>
                    <Text>GST (18%): ${calculatedGST?.toFixed(2)}</Text>
                  </View>
                )}
                <Button
                  mode="contained"
                  onPress={this.rechargeWallet}
                  disabled={!rechargeAmount || isNaN(Number(rechargeAmount))}>
                  Recharge
                </Button>
              </Card>
            )}
          </View>
        ) : (
          <Card style={styles.historyCard}>
            <View style={styles.filterContainer}>
              <Text style={styles.title}>Wallet Transaction History</Text>
              <Button
                mode="outlined"
//                 style={{styles.tabButton}}
                onPress={() => this.setState({ showFilters: !showFilters })}>
                {showFilters ? 'Hide Filters' : 'Filters'}
              </Button>
              {showFilters && (
                <View style={styles.filterForm}>
                  <TouchableOpacity onPress={() => this.setState({ showStartDatePicker: true })}>
                    <Text style={styles.label}>Start Date</Text>
                    <TextInput
                      label='Start Date'
                      value={startDate ? startDate.toLocaleDateString() : ''}
                      editable={false}
                      style={styles.input}
                    />
                  </TouchableOpacity>
                  {showStartDatePicker && (
                    <DateTimePicker
                      value={startDate || new Date()}
                      mode="date"
                      display="default"
                      onChange={this.onStartDateChange}
                    />
                  )}
                  <TouchableOpacity onPress={() => this.setState({ showEndDatePicker: true })}>
                    <Text style={styles.label}>End Date</Text>
                    <TextInput
                      label="End Date"
                      value={endDate ? endDate.toLocaleDateString() : ''}
                      editable={false}
                      style={styles.input}
                    />
                  </TouchableOpacity>
                  {showEndDatePicker && (
                    <DateTimePicker
                      value={endDate || new Date()}
                      mode="date"
                      display="default"
                      onChange={this.onEndDateChange}
                    />
                  )}
                  <View style={styles.innerButtonContainer}>
                    <Button onPress={this.applyFilters}>Apply</Button>
                    <Button onPress={this.resetFilters}>Reset</Button>
                  </View>
                </View>
              )}
            </View>

            <View style={styles.transactionTable}>
              <View style={styles.transactionHeader}>
                <Text style={styles.transactionHeaderText}>Date</Text>
                <Text style={styles.transactionHeaderText}>Amount</Text>
                <Text style={styles.transactionHeaderText}>Type</Text>
                <Text style={styles.transactionHeaderText}>Description</Text>
              </View>
              <FlatList
                data={transactions}
                renderItem={this.renderTransaction}
                keyExtractor={(item) => item.id}
              />
            </View>
          </Card>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabButton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  tabButtonText: {
    fontWeight: 'bold',
  },
  balanceCard: {
    padding: 20,
  },
   label: {
      fontSize: 16,
      marginBottom: 4,
      color: '#333',
    },
  rechargeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  rechargeButtonText: {
    color: '#fff',
  },
  rechargeCard: {
    marginTop: 20,
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loader: {
    marginTop: 20,
  },
  filterContainer: {
    marginBottom: 10,
  },
  filterForm: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: "space-around"
  },
 innerButtonContainer: {
    marginTop: 20, // Add margin to create space above the buttons
    flexDirection: 'row', // This keeps buttons in a row
    justifyContent: 'space-between', // Space them out evenly
  },
  input: {
//     marginVertical: 5,
       height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
  },
  transactionTable: {
    marginTop: 10,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#e0e0e0',
  },
  transactionHeaderText: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  transactionText: {
    flex: 1,
    textAlign: 'center',
  },
  gstInfo: {
    marginTop: 10,
  },
});

export default Wallet;

