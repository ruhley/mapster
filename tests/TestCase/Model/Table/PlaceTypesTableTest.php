<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\PlaceTypesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\PlaceTypesTable Test Case
 */
class PlaceTypesTableTest extends TestCase
{

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'PlaceTypes' => 'app.place_types',
        'PlaceChangeVersions' => 'app.place_change_versions',
        'Maps' => 'app.maps',
        'Universes' => 'app.universes',
        'CharacterChangeVersions' => 'app.character_change_versions',
        'Characters' => 'app.characters',
        'CharacterChanges' => 'app.character_changes',
        'Events' => 'app.events',
        'Chapters' => 'app.chapters',
        'Media' => 'app.media',
        'ChapterVersions' => 'app.chapter_versions',
        'EventVersions' => 'app.event_versions',
        'EventPlaces' => 'app.event_places',
        'Places' => 'app.places',
        'PlaceChanges' => 'app.place_changes',
        'PlaceVersions' => 'app.place_versions',
        'MapChangeVersions' => 'app.map_change_versions',
        'MapChanges' => 'app.map_changes',
        'CharacterVersions' => 'app.character_versions',
        'MapVersions' => 'app.map_versions',
        'MediaVersions' => 'app.media_versions',
        'UniverseVersions' => 'app.universe_versions',
        'PlaceTypeVersions' => 'app.place_type_versions'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('PlaceTypes') ? [] : ['className' => 'App\Model\Table\PlaceTypesTable'];
        $this->PlaceTypes = TableRegistry::get('PlaceTypes', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->PlaceTypes);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
