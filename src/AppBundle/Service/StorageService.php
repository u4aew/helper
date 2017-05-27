<?php
/**
 * Created by PhpStorm.
 * User: makarov
 * Date: 26.06.2016
 * Time: 11:47
 */

namespace AppBundle\Service;


use AppBundle\Model\StorageQuery;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Component\Cache\CacheItem;
use Symfony\Component\DependencyInjection\ContainerInterface;

class StorageService
{

	protected $container;

	public function __construct(ContainerInterface $container)
	{
		$this->container = $container;
	}
	
	public function get($key, $arg1 = null, $arg2 = null){
		$keys = explode('.', $key);

		$cache = $this->container->get('cache.app');
		$cacheKey = implode('|', func_get_args());

		/** @var CacheItem $cacheItem */
		$cacheItem = $cache->getItem($cacheKey);
		$cacheItem->expiresAfter(60);

		if($cacheItem->isHit()) {
			$value = $cacheItem->get();

		}else{
			if(count($keys) == 1){
				$value = StorageQuery::create()->filterByCode($key)->filterByVisible(true)->findOne();
			}else{
				if($setting = StorageQuery::create()->filterByCode($keys[0])->filterByVisible(true)->findOne()){
                    if(is_array($arg1)){
                        $value = $setting->getValue($keys[1], $arg1, $arg2);
                    }else{
                        $value = $setting->getValue($keys[1], [], $arg1);
                    }
                }else{
                    $value = '';
                }

			}
			$cacheItem->set($value);
			$cache->save($cacheItem);
		}

		return $value;
	}

}