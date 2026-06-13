import { FiHeart, FiLogOut, FiMail, FiMapPin, FiPackage, FiShield, FiShoppingBag, FiTruck, FiUser } from 'react-icons/fi'
import { useAuth } from '../hooks/useAuth'
import { useWishlist } from '../hooks/useWishlist'
import { formatPrice } from '../utils/calculations'

export default function Profile() {
  const { user, logout, orders } = useAuth()
  const { wishlist } = useWishlist()
  const totalSpent = orders.reduce((sum, order) => sum + Number(order.total || 0), 0)
  const latestOrder = orders[0]
  const memberCode = user?.id ? `SV-${user.id.slice(0, 6).toUpperCase()}` : 'SV-MEMBER'

  return (
    <main className="page profile-page">
      <section className="profile-hero enhanced">
        <div className="profile-identity">
          <div className="avatar">{user.avatar}</div>
          <div>
            <span>Member Profile</span>
            <h1>{user.fullName}</h1>
            <p><FiMail /> {user.email}</p>
            <div className="profile-tags">
              <strong>Premium Member</strong>
              <strong>{memberCode}</strong>
            </div>
          </div>
        </div>
        <div className="profile-hero-panel">
          <p>Account Status</p>
          <h2>Active</h2>
          <span>Checkout, wishlist, and order history are synced on this device.</span>
          <button className="btn ghost" onClick={logout}><FiLogOut /> Logout</button>
        </div>
      </section>

      <section className="profile-stats">
        <article className="profile-stat"><FiHeart /><span>Wishlist Items</span><strong>{wishlist.length}</strong><p>Saved styles ready for later.</p></article>
        <article className="profile-stat"><FiShoppingBag /><span>Total Orders</span><strong>{orders.length}</strong><p>Completed ShoeVerse purchases.</p></article>
        <article className="profile-stat"><FiPackage /><span>Total Spent</span><strong>{formatPrice(totalSpent)}</strong><p>Across your confirmed orders.</p></article>
        <article className="profile-stat"><FiTruck /><span>Latest Order</span><strong>{latestOrder ? `#${latestOrder.orderNumber}` : 'None'}</strong><p>{latestOrder ? 'Recent order summary is ready.' : 'Your first order is waiting.'}</p></article>
      </section>

      <section className="profile-grid">
        <div className="account-panel">
          <div className="section-title">
            <span>Account Information</span>
            <h2>Personal details</h2>
          </div>
          <div className="info-list">
            <p><FiUser /><span>Full Name</span><strong>{user.fullName}</strong></p>
            <p><FiMail /><span>Email Address</span><strong>{user.email}</strong></p>
            <p><FiShield /><span>Security</span><strong>Local session protected</strong></p>
            <p><FiMapPin /><span>Default Region</span><strong>India</strong></p>
          </div>
        </div>

        <div className="account-panel">
          <div className="section-title">
            <span>Wishlist Preview</span>
            <h2>Saved pairs</h2>
          </div>
          {wishlist.length ? (
            <div className="mini-products">
              {wishlist.slice(0, 3).map((item) => (
                <article key={item.id}>
                  <img src={item.images[0]} alt={item.name} />
                  <div><strong>{item.name}</strong><span>{formatPrice(item.discountPrice)}</span></div>
                </article>
              ))}
            </div>
          ) : (
            <div className="profile-empty">No saved shoes yet. Add products to your wishlist to compare them later.</div>
          )}
        </div>
      </section>

      <section className="account-panel orders-panel">
        <div className="section-title">
          <span>Order History</span>
          <h2>Recent orders</h2>
        </div>
        {orders.length ? (
          <div className="order-list">
            {orders.map((order) => (
              <article className="order-card" key={order.orderNumber}>
                <div><span>Order Number</span><strong>#{order.orderNumber}</strong></div>
                <div><span>Items</span><strong>{order.items.length} {order.items.length === 1 ? 'item' : 'items'}</strong></div>
                <div><span>Date</span><strong>{order.createdAt ? new Date(order.createdAt).toLocaleDateString('en-IN') : 'Today'}</strong></div>
                <div><span>Total</span><strong>{formatPrice(order.total)}</strong></div>
              </article>
            ))}
          </div>
        ) : (
          <div className="profile-empty">No orders yet. When you place an order, tracking details will appear here.</div>
        )}
      </section>
    </main>
  )
}
