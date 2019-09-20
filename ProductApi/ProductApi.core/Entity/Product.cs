﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.core.Entity
{
    public class Product
    {
        public string ProductID { get; set; }
        [Required]
        [MaxLength(50)]
        public string Title { get; set; }
        [Required]
        public int Price { get; set; }
        [Required]
        public string Color { get; set; }
        public bool InStock { get; set; }
        public string Details { get; set; }
        [Required]
        public int Quantity { get; set; }
        public int Rating { get; set; }
        [Column(TypeName = "Date")]
        public DateTime ExpiryDate { get; set; }
        public string ImageUrl { get; set; }
    }
}
  