import { Image, Linking, TextInput, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

const index = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.containerHero}>
         <Image 
         style={styles.imageCar}
         source={require('@/assets/images/frontblackcar.png')}
         resizeMode='cover'
         />
          <Image
          source={require('@/assets/images/Frame3.png')}
          style={{position:'absolute',marginBottom:300,left:10}}
          />
          <Image
          style={styles.logoHero}
          source={require('@/assets/images/logo.png')}
          resizeMode='contain'
          />
          <TouchableOpacity style={{position:'absolute',marginBottom:300,right:10,borderColor:'#ffffff',borderWidth:1,borderRadius:100}} onPress={()=>Linking.openURL('')}>
          <Text style={{color:'#ffffff',padding:10,textAlign:'center'}}>Login/SingUp</Text>
          </TouchableOpacity>
          
         <Text style={[styles.heroText,{fontWeight:'bold'}]}>Discover the world on wheels</Text>
         <Text style={[styles.heroText,{marginBottom:200,fontWeight:'bold'}]}>with our car rental service</Text>
        </View>
        <View style={{
  backgroundColor: '#f5f5f5',
  borderRadius: 16,
  padding: 16,
  marginHorizontal: 16,
  marginTop: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 2,
}}>
  {/* Input Rows */}
  <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
    
    {/* Pick-up Location */}
    <View style={{ flex: 1, minWidth: 140 }}>
      <Text style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Pick-up Location</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1, borderColor: '#ddd' }}>
        <Image source={require('@/assets/images/location.png')} style={{ width: 16, height: 16, marginRight: 8, tintColor: '#666' }} />
        <TextInput
          placeholder="Search a location"
          placeholderTextColor="#888"
          style={{ flex: 1, fontSize: 14, color: '#333' }}
        />
      </View>
    </View>

    {/* Pick-up Date */}
    <View style={{ flex: 1, minWidth: 140 }}>
      <Text style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Pick-up date</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 1, paddingVertical: 10, borderWidth: 1, borderColor: '#ddd' }}>
        <Image source={require('@/assets/images/calendar.png')} style={{ width: 16, height: 16, marginLeft: 5, tintColor: '#666' }} />
        <TextInput
          placeholder="12/12/2023"
          placeholderTextColor="#888"
          style={{ flex: 1, fontSize: 14, color: '#333',marginLeft:10 }}
        />
      </View>
    </View>

    {/* Drop-off Location */}
    <View style={{ flex: 1, minWidth: 140 }}>
      <Text style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Drop-off Location</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1, borderColor: '#ddd' }}>
        <Image source={require('@/assets/images/location.png')} style={{ width: 16, height: 16, marginRight: 8, tintColor: '#666' }} />
        <TextInput
          placeholder="Search a location"
          placeholderTextColor="#888"
          style={{ flex: 1, fontSize: 14, color: '#333' }}
        />
      </View>
    </View>

    {/* Drop-off Date */}
    <View style={{ flex: 1, minWidth: 140 }}>
      <Text style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Drop-off date</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1, borderColor: '#ddd' }}>
        <Image source={require('@/assets/images/calendar.png')} style={{ width: 16, height: 16, marginLeft: 8, tintColor: '#666' }} />
        <TextInput
          placeholder="12/12/2023"
          placeholderTextColor="#888"
          style={{ flex: 1, fontSize: 14, color: '#333', marginLeft:10 }}
        />
      </View>
    </View>

    {/* Find Button */}
    <View style={{ flex: 1, minWidth: 160, alignSelf: 'center' }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#000',
          borderRadius: 100,
          paddingVertical: 12,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
          Find a Vehicle →
        </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
        <View style={{marginTop:45}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:5}}>Rent by Company</Text>
            <Text style={{position:'absolute',right:10}}>View All →</Text>
          </View>
          <View style={{flexDirection:'row',}}>
            <ScrollView
            horizontal >
            <TouchableOpacity onPress={()=>Linking.openURL('')}>  
            <Image style={{margin:15}} source={require('@/assets/images/toyota.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL('')}> 
            <Image style={{margin:15}} source={require('@/assets/images/tesla.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL('')}> 
            <Image style={{margin:15}} source={require('@/assets/images/ford.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL('')}> 
            <Image style={{margin:15}} source={require('@/assets/images/honda.png')}/>
            </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{marginTop:10,flexDirection:'row',}}>
            <Text style={{marginLeft:5}}>Rent by body type</Text>
            <Text style={{position:'absolute',right:10}}>View All →</Text>
          </View>
          <View style={{flexDirection:'row',}}>
            <ScrollView
            horizontal >
            <TouchableOpacity onPress={()=>Linking.openURL('')}>  
            <Image style={{margin:15}} source={require('@/assets/images/suv.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL('')}> 
            <Image style={{margin:15}} source={require('@/assets/images/coupe.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL('')}> 
            <Image style={{margin:15}} source={require('@/assets/images/crossover.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL('')}> 
            <Image style={{margin:15}} source={require('@/assets/images/sedan.png')}/>
            </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{marginTop:10}}>
            <Text style={{textAlign:'center',fontSize: 26, fontWeight: 'bold'}}>Our Impressive Collection of Cars</Text>
            <Text style={{textAlign:'center',margin:20}}>Ranging from elegant sedans to powerful sports cars, all carefully selected to provide our customers with the ultimate driving experience.</Text>
          <View style={{flexDirection:'row',flex:1,marginTop:10}}>
            <TouchableOpacity onPress={()=>Linking.openURL('#')} style={{backgroundColor:'#000000ff',borderRadius:100,justifyContent:'center',alignItems:'center',margin:5,flex:1,padding:15}}>
              <Text style={{padding:10,textAlign:'center',color:'#ffffff'}}>Popular Car</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL('#')} style={{borderRadius:100,justifyContent:'center',alignItems:'center',margin:5,flex:1,borderColor:'#000000ff',borderWidth:1}}>
              <Text style={{padding:10,textAlign:'center'}}>Luxury Car</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL('#')} style={{borderRadius:100,justifyContent:'center',alignItems:'center',margin:5,flex:1,borderColor:'#000000ff',borderWidth:1}}>
              <Text style={{padding:10,textAlign:'center'}}>Vintage Car</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL('#')} style={{borderRadius:100,justifyContent:'center',alignItems:'center',margin:5,flex:1,borderColor:'#000000ff',borderWidth:1}}>
              <Text style={{padding:10,textAlign:'center'}}>Family Car</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL('#')} style={{borderRadius:100,justifyContent:'center',alignItems:'center',margin:5,flex:1,borderColor:'#000000ff',borderWidth:1}}>
              <Text style={{padding:10,textAlign:'center'}}>Off-Road Car</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal style={{marginTop:10}}>
              <TouchableOpacity onPress={()=>Linking.openURL('#')}>
                <Image style={{}} source={require('@/assets/images/p1.png')}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>Linking.openURL('#')}>
                <Image style={{}} source={require('@/assets/images/p2.png')}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>Linking.openURL('#')}>
                <Image style={{}} source={require('@/assets/images/p3.png')}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>Linking.openURL('#')}>
                <Image style={{}} source={require('@/assets/images/p4.png')}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>Linking.openURL('#')}>
                <Image style={{}} source={require('@/assets/images/p5.png')}/>
              </TouchableOpacity>
          </ScrollView>
            <View style={{flex:1,marginTop:20,justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#000000',borderRadius:100}}onPress={()=>Linking.openURL('#')}>
                <Text style={{color:'#ffffff',textAlign:'center',padding:10}}>See all cars →</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop:20,width: '100%', height: 400}}>
              <Image style={{width:'100%',height:'100%'}}
              resizeMode='contain'
              source={require('@/assets/images/Group125.png')}/>
            </View>
            <View style={{padding:10,backgroundColor:'#000000',alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'#ffffff',fontWeight:'bold',fontSize:24}}>Our Services & Benefits</Text>
              <Text style={{color:'#ffffff',textAlign:'center'}}>To make renting easy and hassle-free, we provide a variety of services and advantages. We have you covered with a variety of vehicles and flexible rental terms.</Text>
              <Image style={{marginTop:30}} source={require('@/assets/images/quality.png')}/>
              <Text style={{fontSize:24,color:'#ffffff',fontWeight:'bold'}}>Quality Choice</Text>
              <Text style={{padding:30,color:'#ffffff',textAlign:'center'}}>We offer a wide range of high-quality vehicles to choose from, including luxury cars, SUVs, vans, and more.</Text>
              <Image style={{marginTop:30,width:50,height:50}} source={require('@/assets/images/rupee.png')}/>
              <Text style={{fontSize:24,color:'#ffffff',fontWeight:'bold'}}>Affordable Prices</Text>
              <Text style={{padding:30,color:'#ffffff',textAlign:'center'}}>Our rental rates are highly competitive and affordable, allowing our customers to enjoy their trips without breaking the bank.</Text>
            
              <Image style={{marginTop:30,width:50,height:50}} source={require('@/assets/images/conv.png')}/>
              <Text style={{fontSize:24,color:'#ffffff',fontWeight:'bold'}}>Convenient Online Booking</Text>
              <Text style={{padding:30,color:'#ffffff',textAlign:'center'}}>With our easy-to-use online booking system, customers can quickly and conveniently reserve their rental car from anywhere, anytime.</Text>
            </View>
            <View style={{marginTop:10}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:10,fontWeight:'bold',fontSize:24}}>What Our Customers Say</Text>
                <Image style={{position:'absolute',right:10,width:55,height:25}}source={require('@/assets/images/leftrightarrow.png')}/>
              </View>
              <Text style={{margin:20}}>"I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this company to anyone looking for a premium car rental experience."</Text>
              <Image style={{marginLeft:10,width:100,height:30}} source={require('@/assets/images/user.png')}/>
            </View>
            <View style={{backgroundColor:'#000000',marginTop:20}}><Text>the end</Text></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  safe:{
    flex:1,
    backgroundColor:'#ffffffff'
  },
  containerHero:{
    height:350,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000000',
    
  },
  imageCar:{
    width:'100%',
    height:'100%',
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0
  },
  heroText:{
    color:'#ffffffff',
    fontSize:20,
  },
  logoHero:{
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:300,
    height:10
  }
})