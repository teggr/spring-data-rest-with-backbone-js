// A $( document ).ready() block.
$(document).ready(function () {
  console.log("ready!");

  var OrderModel = Backbone.Model.extend({
    defaults: {
      orderNumber: "",
      customer: "",
      createdDate: "",
      lastModifiedDate: ""
    },
  });

  var OrderCollection = Backbone.Collection.extend({
    url: "/orders",
    model: OrderModel,
    parse: function (data) {
      return data._embedded.orders;
    },
  });

  var orders = new OrderCollection();

  // order list
  var OrdersListView = Backbone.View.extend({
    el: "#orders-app",

    initialize: function() {
        this.listenTo(this.collection, 'sync', this.render);
      },

      render: function() {
        var $list = this.$('#orders-list').empty();
    
        this.collection.each(function(model) {
          var item = new OrdersListItemView({model: model});
          $list.append(item.render().$el);
        }, this);
    
        return this;
      },

      events: {
        'click #create': 'onCreate'
      },
    
      onCreate: function() {
        var $orderNumber = this.$('#orderNumber');
        var $customer = this.$('#customer');
    
        if ($orderNumber.val()) {
          this.collection.create({
            orderNumber: $orderNumber.val(),
            customer: $customer.val()
          });
    
          $orderNumber.val('');
          $customer.val('');
        }
      }

  });

  var OrdersListItemView = Backbone.View.extend({
    tagName: "li",
    className: "order",
    template: _.template($("#order-item-tmpl").html()),

    initialize: function () {
      this.listenTo(this.model, "destroy", this.remove);
    },

    render: function () {
      var html = this.template(this.model.toJSON());
      this.$el.html(html);
      return this;
    },

    events: {
      "click .remove": "onRemove",
    },

    onRemove: function () {
      this.model.destroy();
    },
  });

  var ordersList = new OrdersListView({ collection: orders });

  orders.fetch().then(function () {
    console.log(orders.length);
  });
});
