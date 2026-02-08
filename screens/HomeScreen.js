import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CategoryCard from '../components/CategoryCard';
import FeaturedCard from '../components/FeaturedCard';
import ProductCard from '../components/ProductCard';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 1, name: 'Electronics', icon: 'laptop-outline', color: '#4A90E2' },
    { id: 2, name: 'Fashion', icon: 'shirt-outline', color: '#E94B3C' },
    { id: 3, name: 'Home', icon: 'home-outline', color: '#50C878' },
    { id: 4, name: 'Sports', icon: 'basketball-outline', color: '#F39C12' },
  ];

  const featured = [
    {
      id: 1,
      title: 'Summer Sale',
      subtitle: 'Up to 50% OFF',
      color: '#FF6B9D',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400',
    },
    {
      id: 2,
      title: 'New Arrivals',
      subtitle: 'Check out latest',
      color: '#4A90E2',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$99.99',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: '$199.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
    },
    {
      id: 3,
      name: 'Camera Lens',
      price: '$299.99',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?w=300',
    },
    {
      id: 4,
      name: 'Laptop Stand',
      price: '$49.99',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, User! 👋</Text>
          <Text style={styles.subtitle}>What are you looking for?</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color="#333" />
          <View style={styles.badge} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </ScrollView>
      </View>

      {/* Featured Banners */}
      <View style={styles.section}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
          {featured.map((item) => (
            <FeaturedCard key={item.id} item={item} />
          ))}
        </ScrollView>
      </View>

      {/* Popular Products */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Products</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productsGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </View>
      </View>

      {/* Bottom Spacing */}
      <View style={{ height: 20 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E94B3C',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '600',
  },
  categoriesScroll: {
    paddingLeft: 20,
  },
  featuredScroll: {
    paddingLeft: 20,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
