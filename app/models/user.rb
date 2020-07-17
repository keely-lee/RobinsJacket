# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  funds_available :float            not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  attr_reader :password
  validates :email, :password_digest, :session_token, uniqueness: true, presence: true
  validates :password, length: {minimum: 8, allow_nil: true}
  validates :fname, :lname, :funds_available, presence: true
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
  after_initialize :ensure_session_token, :funds
  after_save :watchlist_create, :portfolio_create


  has_one :portfolio,
  class_name: :Portfolio#,
 # dependent: :destroy
  
  has_one :watchlist,
  class_name: :Watchlist,
  dependent: :destroy

  has_many :watched_stocks,
  through: :watchlist,
  source: :stocks,
  class_name: :Stock

  has_many :transactions,
  through: :portfolio,
  source: :transactions

  def self.find_by_credentials(username, password)
    @user = User.find_by(email: username)
    return nil if @user.nil?
    @user.is_password?(password) ? @user : nil
  end

  def is_password?(password)
    bc = BCrypt::Password.new(password_digest)
    bc.is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def funds
    self.funds_available ||= 0.0
  end
  
 def watchlist_create
   self.watchlist ||= Watchlist.create!(user_id: self.id)
 end

 def portfolio_create
  self.portfolio ||= Portfolio.create!(user_id: self.id)
 end

end