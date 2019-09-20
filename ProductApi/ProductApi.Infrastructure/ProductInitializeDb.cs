using ProductApi.core.Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.Infrastructure
{
   public class ProductInitializeDb : DropCreateDatabaseIfModelChanges<ProductContext>
    {
        protected override void Seed(ProductContext context)
        {
            context.Products.Add(new Product
            {
                ProductID = "1",
                Color = "Red",
                Details = "This is awesome Product",
                ExpiryDate = DateTime.Now,
                ImageUrl = "abc.jpg",
                InStock = true,
                Price = 400,
                Quantity = 50,
                Rating = 5,
                Title = "Hammer"

            });
            context.Products.Add(new Product
            {
                ProductID = "2",
                Color = "Blue",
                Details = "This is also an awesome Product",
                ExpiryDate = DateTime.Now,
                ImageUrl = "xyz.jpg",
                InStock = true,
                Price = 400,
                Quantity = 50,
                Rating = 5,
                Title = "Hammer"

            });
            context.SaveChanges();
            base.Seed(context);
        }
    }
}
